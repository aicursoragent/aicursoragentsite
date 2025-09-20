import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Налаштування для GitHub Pages
  base: '/aicursoragentsite/',
  
  // Налаштування теми
  theme: 'default',
  
  // Налаштування експорту
  export: {
    format: 'pdf',
    timeout: 30000,
  },
  
  // Налаштування розробки
  server: {
    port: 3030,
    open: true
  },
  
  // Налаштування збірки
  build: {
    outDir: 'dist'
  }
})
