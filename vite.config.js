import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Это важно для корректной работы относительных путей
  plugins: [react()],
})
