import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // preview: {
  //   host: 'localhost',
  //   port: 5173,
  //   strictPort: true,
  // },
  server: {
    port: 5173,
    proxy: {
      'https://localhost:4000': {
        target: 'http://127.0.0.1:5173',
        changeOrigin: true,
        ws: true,
      }
    },
  }
})
