export const ssr = false;
import { isTextMode, text } from '../stores.js';

export function load({ url }) {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined' && url) {
        const textParam = url.searchParams.get('text');
        if (textParam) {
            isTextMode.set(true);
            text.set(decodeURI(textParam));
        }
    }
    // Return an empty object to satisfy the load function contract
    return {};
}