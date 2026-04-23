import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f8',
          100: '#ffe9ed',
          200: '#ffced8',
          300: '#ffa7ba',
          400: '#ff7897',
          500: '#f24f7a',
          600: '#de2e60',
          700: '#bb1f4f',
          800: '#9b1d45',
          900: '#851d41'
        },
        ink: '#1c1a1c',
        muted: '#7f7480',
        sand: '#f9f4f6'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px -16px rgba(17, 12, 18, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
