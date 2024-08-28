import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

// Emulated web worker does not work in vite dev on Firefox
process.env.BROWSER = 'chromium';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
	  postcss: './postcss.config.js',  // Ensure this points to the correct config file
	},
	define: {
	  'import.meta.vitest': 'undefined',
	},
	test: {
	  include: ['src/**/*.{test,spec}.{js,ts}', 'src/utils/**/*.{js,ts}'],
	},
  });
