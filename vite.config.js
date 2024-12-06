import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
	],
	optimizeDeps: {
		include: [
			'@tabler/icons-react',
			'@react-three/drei',
			'three',
			'three-globe',
			'moment-timezone',
			'framer-motion',
			'@react-three/fiber',
			'react-dom',
			// Add any other large dependencies here
		]
	},
	cache: {
		dir: 'node_modules/.vite', // Optional custom cache directory
	},
});
