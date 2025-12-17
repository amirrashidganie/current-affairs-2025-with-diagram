// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(),tailwindcss(), /* other plugins like react() */],
  base:"/"
  // Remove any 'css: { postcss: { ... } }' block
});

