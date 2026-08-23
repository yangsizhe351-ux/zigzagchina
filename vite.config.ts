import { sites } from '@openai/sites-vite-plugin';
import vinext from 'vinext';
import { defineConfig } from 'vite';
import hostingConfig from './.openai/hosting.json';

export default defineConfig({
  plugins: [vinext(), sites()],
  define: { __HOSTING_CONFIG__: JSON.stringify(hostingConfig) },
});
