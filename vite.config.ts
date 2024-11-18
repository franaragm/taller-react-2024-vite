import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Para usar testing con "globals" como describe, test, etc.
    environment: 'jsdom', // Simula un navegador
    setupFiles: './src/tests/setup.ts', // Archivo de configuración inicial
    css: true, // Si necesitas soporte para CSS en las pruebas
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@routes': path.resolve(__dirname, './src/routes'),
    },
  },
})
