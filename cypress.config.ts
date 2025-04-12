import { defineConfig } from 'cypress';
// import viteConfig from './vite.config';
import viteProcesser from 'cypress-vite';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      // viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', viteProcesser()); 
      return config;
    },
  },
});
