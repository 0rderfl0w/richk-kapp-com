/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          500: '#4263eb',
          600: '#3b5bdb',
          700: '#364fc7',
          800: '#2b3d9e',
          900: '#1e2a6e',
        },
      },
    },
  },
  plugins: [],
};
