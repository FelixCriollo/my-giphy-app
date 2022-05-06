import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@containers': path.resolve(__dirname, './src/components/containers'),
      '@elements': path.resolve(__dirname, './src/components/elements'),
      '@gif': path.resolve(__dirname, './src/components/gif'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@api': path.resolve(__dirname, './src/api'),
      '@routes': path.resolve(__dirname, './src/routes'),
    }
  },
  plugins: [react()]
})
