import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://extensivevision.com/nike_test', // ここにプロキシ先のURLを設定
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          Connection: 'keep-alive' // Connectionヘッダーをここで設定
        }
      }
    }
  }
})