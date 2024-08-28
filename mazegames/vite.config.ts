import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [sveltekit()],
    base: '/mazegames/',
    build: {
        outDir: path.resolve(__dirname, '../react-app/dist/mazegames'),
        emptyOutDir: true
    },
    server: {
        port: 3001
    }
});