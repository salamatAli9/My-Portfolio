import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // IMPORTANT: Windows file changes don't sync to Linux without this
    },
    host: true, // This exposes the server to the Docker network
    strictPort: true,
    port: 5173, 
  },
})
