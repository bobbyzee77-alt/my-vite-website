import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Must match your GitHub repo name exactly for GitHub Pages project sites:
// https://<user>.github.io/<repo-name>/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/my-vite-website/',
})
