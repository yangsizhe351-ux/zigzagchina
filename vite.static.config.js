import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { prerender } from './scripts/prerender.mjs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'prerender-public-routes',
      apply: 'build',
      closeBundle: () => prerender(),
    },
  ],
  build: {
    outDir: 'dist-netlify',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about/index.html', import.meta.url)),
        credentials: fileURLToPath(new URL('./business-credentials/index.html', import.meta.url)),
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
      },
    },
  },
});
