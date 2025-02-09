import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		hmr: {
			overlay: false,
		}
	},
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'@react-spring/web',
			'framer-motion',
			'react-animated-cursor',
			'react-fast-marquee'
		]
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'animation-vendor': ['@react-spring/web', 'framer-motion'],
				}
			}
		}
	}
});