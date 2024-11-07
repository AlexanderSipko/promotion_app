import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // base: "/", // Это важно для корректной работы относительных путей
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adjust 'src' if your structure is different
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      },
      sass: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
})
