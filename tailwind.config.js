import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
}

