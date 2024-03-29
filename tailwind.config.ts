import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      widest: '.2em'
    },
    colors: {
      'lightCyan': 'hsl(193, 38%, 86%)',
      'lightColor': '#eeeeee',
      'neonGreen': 'hsl(150, 100%, 66%)',
      'grayishBlue': 'hsl(217, 19%, 38%)',
      'darkGrayishBlue': 'hsl(217, 19%, 24%)',
      'darkBlue': 'hsl(218, 23%, 16%)',
      'white': '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 0 30px 2px rgba(92, 255, 255, 1)',
      }
    },
  },
  plugins: [],
}
export default config
