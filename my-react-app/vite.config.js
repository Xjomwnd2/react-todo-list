import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'my-react-app', // Set the root directory
  server: {
    port: 5173,
  },
})
