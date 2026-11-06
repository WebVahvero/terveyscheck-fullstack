import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    // In development, send API calls to Flask (no CORS setup needed)
    proxy: {
      '/api': 'http://127.0.0.1:5000',
    },
  },
  build: {
    // Flask serves the built files from the static folder
    outDir: '../static',
    emptyOutDir: true,
  },
})