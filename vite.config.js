import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Long-term caching: framework and course content change rarely, app code changes often.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('/src/data/lessons')) return 'lessons'
          if (id.includes('/src/data/')) return 'data'
        },
      },
    },
  },
})
