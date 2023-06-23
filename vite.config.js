import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://postalman.github.io/tech-part-hw/',
  plugins: [react()],
  
})
