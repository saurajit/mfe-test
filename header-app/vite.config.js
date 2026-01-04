import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:3001',
  plugins: [
    react(),
    federation({
      name: 'header-app',
      manifest: true,
      remotes: {
        store: "store@http://localhost:3003/mf-manifest.json",
      },
      exposes: {
        './Header': './src/components/Header.jsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    })
  ],
  server: {
    origin: 'http://localhost:3001',
    port: 3001
  },
  preview: {
    origin: 'http://localhost:3001',
    port: 3001
  }
})
