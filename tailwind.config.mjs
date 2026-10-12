/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blurple: {
          DEFAULT: '#5865f2',
          hover: '#4752c4',
          light: '#7983f5',
        },
        obsidian: {
          DEFAULT: '#090a0f',
          card: '#12141c',
          hover: '#181b26',
        },
        surface: {
          light: '#f6f8fa',
          'card-light': '#ffffff',
          'hover-light': '#f8f9fa',
          'border-light': '#e5e7eb',
          'muted-light': '#6b7280',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
