/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bud Buddy color palette - based on iOS design system
        primary: {
          50: '#e8f3ee',
          100: '#c2e2d3',
          200: '#9dd1b8',
          300: '#6fbc99',
          400: '#52b788', // budsForest light
          500: '#2D6A4F', // budsPrimary dark mode
          600: '#1B4332', // budsPrimary light mode
          700: '#163529',
          800: '#112620',
          900: '#0c1b16',
        },
        forest: {
          light: '#52B788',
          DEFAULT: '#40916C',
          dark: '#2D6A4F',
        },
        purple: {
          light: '#5A3F6B',
          DEFAULT: '#3D2645',
        },
        cream: {
          light: '#FAF7F2',
          dark: '#1A1A1A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#252525',
        },
        text: {
          primary: {
            light: '#0F0F0F',
            dark: '#FFFFFF',
          },
          secondary: {
            light: '#4A4A4A',
            dark: '#B0B0B0',
          },
        },
        destructive: {
          light: '#C1495B',
          dark: '#D95F6F',
        },
        divider: {
          light: '#E5E5E5',
          dark: '#3A3A3A',
        },
      },
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
