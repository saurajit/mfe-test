import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      manifest: true,
      remotes: {
        headerApp: "header-app@http://localhost:3001/mf-manifest.json",
        store: "store@http://localhost:3003/mf-manifest.json",
      },
      exposes: {},
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
    port: 3000
  },
  preview: {
    port: 3000
  }
})
