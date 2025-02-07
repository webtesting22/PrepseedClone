import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [sveltekit()],
  build: {
    sourcemap: false, // Disable source maps to fix the Vercel error
  },
};
