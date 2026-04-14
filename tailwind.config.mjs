/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crimson: '#8C1C13',
        ivory: '#F5F0E8',
        charcoal: '#0E0E0E',
        'charcoal-mid': '#1A1A1A',
        gold: '#C9A84C',
        'ivory-dark': '#EDE8DC',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.5em',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'cursor-grow': 'cursorGrow 0.2s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
