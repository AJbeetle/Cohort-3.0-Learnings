import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  //wsl2 configs
  server : {
    port : 5173,
    host : "0.0.0.0",
    watch : {
      usePolling : true
    }
  }
})
