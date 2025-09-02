import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // permite conexiones externas
    port: 4173, // puerto de Vite, no crítico para Render
    allowedHosts: ['js-movies.onrender.com'], // tu dominio en Render
  }
});
