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
      remotes: {},
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
  }
})
