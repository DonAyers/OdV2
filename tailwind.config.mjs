/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        // Warm terracotta accent
        terra: {
          50:  '#fdf6f0',
          100: '#faeadb',
          200: '#f4d0b4',
          300: '#ecaf82',
          400: '#e28550',
          500: '#d96830',
          600: '#c45020',
          700: '#a33d18',
          800: '#843119',
          900: '#6c2b18',
        },
        // Warm ink for text
        ink: {
          50:  '#f6f4f1',
          100: '#ede9e2',
          200: '#d8d1c5',
          300: '#bfb3a2',
          400: '#a0907c',
          500: '#887861',
          600: '#72634f',
          700: '#5c4f40',
          800: '#4d4235',
          900: '#2e2720',
        },
        // Cream backgrounds
        cream: {
          50:  '#fffdf9',
          100: '#fdf8f0',
          200: '#f8eedc',
          300: '#f0dfbe',
        },
        // Sage green secondary
        sage: {
          100: '#eef2ed',
          200: '#d4e0d2',
          500: '#6b8f68',
          600: '#547351',
          700: '#3f5a3d',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2e2720',
            fontFamily: '"Source Serif 4", Georgia, serif',
            lineHeight: '1.8',
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  plugins: [],
};
