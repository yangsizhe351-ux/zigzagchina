import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = resolve(projectRoot, 'dist-netlify');
const publicRoutes = [
  { path: '/', file: 'index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/business-credentials', file: 'business-credentials/index.html' },
];

function useBuiltAssetUrls(html, manifest) {
  return Object.entries(manifest).reduce((result, [source, output]) => {
    if (!source.startsWith('assets/') || !output.file) return result;
    return result.replaceAll(`/${source}`, `/${output.file}`);
  }, html);
}

export async function prerender() {
  const server = await createServer({
    root: projectRoot,
    configFile: false,
    appType: 'custom',
    logLevel: 'error',
    plugins: [react()],
    server: { middlewareMode: true, hmr: false, ws: false },
  });

  try {
    const [{ default: App }, manifestSource] = await Promise.all([
      server.ssrLoadModule('/src/main.jsx'),
      readFile(resolve(outputRoot, '.vite/manifest.json'), 'utf8'),
    ]);
    const manifest = JSON.parse(manifestSource);

    for (const route of publicRoutes) {
      const outputFile = resolve(outputRoot, route.file);
      const template = await readFile(outputFile, 'utf8');
      const markup = useBuiltAssetUrls(renderToString(createElement(App, { initialPath: route.path })), manifest);
      const marker = '<div id="root"></div>';
      if (!template.includes(marker)) throw new Error(`Missing root marker in ${route.file}`);
      await writeFile(outputFile, template.replace(marker, `<div id="root" data-prerendered>${markup}</div>`));
    }
  } finally {
    await server.close();
  }
}
