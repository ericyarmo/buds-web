/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm, friendly color palette for Buds
        primary: {
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#ffcfc9',
          300: '#fdada3',
          400: '#fa7d6d',
          500: '#f15842',
          600: '#de3a24',
          700: '#bb2f1a',
          800: '#9a2a1a',
          900: '#80291c',
        },
        secondary: {
          50: '#fef6ee',
          100: '#fdead6',
          200: '#fad1ad',
          300: '#f7b179',
          400: '#f38743',
          500: '#f06620',
          600: '#e14b16',
          700: '#ba3714',
          800: '#942d18',
          900: '#782816',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
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
