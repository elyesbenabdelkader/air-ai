import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const BACKEND_SERVER_PORT = 5000;
const FRONTEND_SERVER_PORT = 8080;

export default defineConfig({
  server: {
    port: FRONTEND_SERVER_PORT,
    proxy: {
      "/api": `http://127.0.0.1:${BACKEND_SERVER_PORT}`,
    },
  },
  plugins: [react()],
});
