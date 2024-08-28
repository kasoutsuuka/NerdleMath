import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: path.resolve(__dirname, '../react-app/dist/mazegames'),
            assets: path.resolve(__dirname, '../react-app/dist/mazegames'),
            fallback: 'index.html'
        }),
        paths: {
            base: '/mazegames'
        }
    }
};

export default config;