/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for your woodcrafts brand
        'wood': {
          50: '#fef7ed',
          100: '#fdedd4',
          200: '#fbd7a8',
          300: '#f8bb71',
          400: '#f59538',
          500: '#f2750f',
          600: '#e35d09',
          700: '#bc450b',
          800: '#96370f',
          900: '#7a2f10',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
