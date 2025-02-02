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
			'moment-timezone',
			'framer-motion',
			'react-dom',
		]
	},
	cache: {
		dir: 'node_modules/.vite', // Optional custom cache directory
	},
});
