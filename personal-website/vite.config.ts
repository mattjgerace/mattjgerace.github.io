import { defineConfig } from 'vite'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/js',
  publicDir: false,
  build: {
    outDir: 'static/js',
    lib: {
      entry: path.resolve(__dirname, 'components/my-element.ts'),
      formats: ['es'],
      name: 'web-components',
      fileName: (format) => `web-components.${format}.js`
    },
    rollupOptions: {
      output: {
      },
    },
    manifest: false,
  },
})