import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

const dev = process.argv.includes('dev');

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