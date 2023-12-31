import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cerulean: '#1C5D99',
                white: '#FFFFFF',
                black: '#00120B',
                aqua: '#00C2D1',
                grey: '#E7E6F7'
            }
        },
    },
    plugins: [],
};
export default config;
