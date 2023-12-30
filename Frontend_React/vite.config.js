import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'Frontend_React/src/main.js', // Specify the path to your entry JavaScript file
    },
  },
})
