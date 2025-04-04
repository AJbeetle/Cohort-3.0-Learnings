import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // configurations for running HMR in wsl2
  server :{
    host : '0.0.0.0',
    watch : {
      usePolling : true
    }
  }
})
