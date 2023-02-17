/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import sass from 'sass';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsConfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts']
  },
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
        includePaths: ['src/assets/styles']
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});
