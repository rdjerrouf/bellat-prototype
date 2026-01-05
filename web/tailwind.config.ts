import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bellat-red': '#D42027',
        'bellat-red-dark': '#A01820',
        'bellat-gray-light': '#F5F5F5',
        'bellat-gray-dark': '#333333',
        'bellat-success': '#10B981',
        'bellat-warning': '#F59E0B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['"Noto Sans Arabic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
