import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				icon: true,
				dimensions: false
				// etc...
			}
		})
	],
	build: {
		sourcemap: true
	}
});
