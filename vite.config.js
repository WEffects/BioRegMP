import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Ensure paths start with ./
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        service_1: resolve(__dirname, 'services-1.html'),
        service_2: resolve(__dirname, 'services-2.html'),
        service_3: resolve(__dirname, 'services-3.html'),
        experince: resolve(__dirname, 'experince.html'),
        contact: resolve(__dirname, 'contact.html'),
        // Add other pages as needed
      }
    }
  }
})
