import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 12000,
    cors: true,
    headers: {
      'X-Frame-Options': 'ALLOWALL'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 12001,
    cors: true,
    headers: {
      'X-Frame-Options': 'ALLOWALL'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        '2025ws': '2025ws.html',
        'from-the-chosen': 'from-the-chosen.html',
        'harvest-calc': 'harvest-calc.html',
        'development-page': 'development-page.html',
        'background': 'background.html',
        'quiz': 'quiz.html',
        'quiz2': 'quiz2.html',
        'thankyou': 'thankyou.html',
        'what-is-ncr-cam': 'what-is-ncr-cam.html',
        'index2': 'index2.html',
        'investigate': 'investigate/index.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default'
        })
      ]
    }
  }
})