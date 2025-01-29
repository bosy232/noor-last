/** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {
          fontFamily: {
            arabic: ['Noto Sans Arabic', 'sans-serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
          animation: {
            'gradient': 'gradient 8s linear infinite',
            'fade-in': 'fade-in 0.5s ease-in-out',
          },
          keyframes: {
            gradient: {
              '0%, 100%': {
                'background-size': '200% 200%',
                'background-position': 'left center',
              },
              '50%': {
                'background-size': '200% 200%',
                'background-position': 'right center',
              },
            },
            'fade-in': {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
          },
          colors: {
            primary: {
              50: '#fdedee',
              100: '#f9d0d2',
              200: '#f2a9ad',
              300: '#eb8288',
              400: '#e45b63',
              500: '#d72a30',
              600: '#c4252a',
              700: '#b12024',
              800: '#9e1b1e',
              900: '#8b1618',
            },
            secondary: {
              50: '#f0f0f0',
              100: '#e0e0e0',
              200: '#c0c0c0',
              300: '#a0a0a0',
              400: '#808080',
              500: '#606060',
              600: '#404040',
              700: '#303030',
              800: '#202020',
              900: '#101010',
            }
          },
        },
      },
      plugins: [],
    };
