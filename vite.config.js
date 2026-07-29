import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
    allowedHosts: [
      '.ngrok-free.app',
      '.loca.lt',
      'bore.pub',
      'ngrok.io',
      'localhost',
      '.abhipraya.dev',
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['react-scan'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
});
