import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'craft-terra': {
          50: '#fdf8f5', 100: '#fbeee5', 200: '#f7dcc7', 300: '#f0c4a1',
          400: '#e9a966', 500: '#d97706', 600: '#c4640b', 700: '#a64d0f',
          800: '#843b0f', 900: '#6b2f0d',
        },
        'craft-warm': {
          50: '#fffbf5', 100: '#fff5eb', 200: '#ffebd5', 300: '#ffdcb2',
          400: '#ffbf86', 500: '#ff9c5a', 600: '#ff7f3f', 700: '#e5622d',
          800: '#c4451a', 900: '#a83a0d',
        },
      },
    },
  },
  plugins: [],
}
export default config
