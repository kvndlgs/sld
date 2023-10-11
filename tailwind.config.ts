import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'darky': {
          'DEFAULT': '#3B4951',
          '900': '#252D32',
          '800': '#3B4951',
          '700': '#92A4B0',
          '600': '#CDD5DB',
          '500': '#EAEEF0',
        },
        'primary': {
          'DEFAULT': '#F6D13A',
          '900': "#8A4D00",
          '800': "#F08700",
          '700': "#F3AE00",
          '600': "#F6D13A",
          '500': "#FDF4CE",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
  },
  plugins: [
  ],
}
export default config
