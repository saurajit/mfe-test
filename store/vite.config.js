import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:3003',
  plugins: [
    react(),
    federation({
      name: 'store',
      manifest: true,
      remotes: {},
      exposes: {
        './store': './src/store.jsx',
        './slice': './src/slice',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-redux': {
          singleton: true,
        },
        '@reduxjs/toolkit': {
          singleton: true
        }
      },
    })
  ],
  server: {
    origin: 'http://localhost:3003',
    port: 3003
  },
  preview: {
    origin: 'http://localhost:3003',
    port: 3003
  }
})
