import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'village-green': {
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
          800: '#166534', 900: '#145231',
        },
        'village-cream': {
          50: '#fdfcfb', 100: '#faf8f3', 200: '#f5f1e8', 300: '#f0eae1',
          400: '#e5dcd0', 500: '#d4c5b9', 600: '#bfb0a0', 700: '#a89680',
          800: '#8f7d6d', 900: '#7a6b5f',
        },
      },
    },
  },
  plugins: [],
}
export default config
