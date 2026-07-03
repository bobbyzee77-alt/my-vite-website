import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel serves the site from the root of its own domain (no /repo-name/
// subfolder like GitHub Pages needs), so base stays at '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})

