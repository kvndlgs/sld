import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '5px',
        '1.5': '14px',
        '6': '59px',
        '10.5': '95px'
      },
      colors: {
        'darky': {
          'DEFAULT': 'hsl(204,11%,26%)',
          50: "hsl(204,11%,96%)",
          100: "hsl(204,11%,86%)",
          200: "hsl(204,11%,76%)",
          300: "hsl(204,11%,66%)",
          400: "hsl(204,11%,56%)",
          500: "hsl(204,11%,46%)",
          600: "hsl(204,11%,36%)",
          700: "hsl(204,11%,26%)",
          800: "hsl(204,11%,16%)",
          900: "hsl(204,11%,6%)",
        },
        'primary': {
          'DEFAULT': 'hsl(48,91%, 60%)',
          50: "hsl(48,91%, 96%)",
          100: "hsl(48,91%, 91%)",
          200: "hsl(48,91%, 81%)",
          300: "hsl(48,91%, 71%)",
          400: "hsl(48,91%, 61%)",
          500: "hsl(48,91%, 51%)",
          600: "hsl(48,91%, 41%)",
          700: "hsl(48,91%, 31%)",
          800: "hsl(48,91%, 21%)",
          900: "hsl(48,91%, 11%)",
          950: "hsl(48,91%, 6%)"
        },
        'secondary': {
          'DEFAULT': 'hsl(274, 91%, 40%)',
          50:  "hsl(274, 91%, 95%)",
          100: "hsl(274, 91%, 90%)",
          200: "hsl(274, 91%, 80%)",
          300: "hsl(274, 91%, 70%)",
          400: "hsl(274, 91%, 60%)",
          500: "hsl(274, 91%, 50%)",
          600: "hsl(274, 91%, 40%)",
          700: "hsl(274, 91%, 30%)",
          800: "hsl(274, 91%, 20%)",
          900: "hsl(274, 91%, 10%)",
        },
    
        'error': {
          'DEFAULT': 'hsl(34,100%,57%)',
          900: "hsl(11,100%,7%)",
          800: "hsl(11,100%,17%)",
          700: "hsl(11,100%,27%)",
          600: "hsl(11,100%,37%)",
          500: "hsl(11,100%,47%)",
          400: "hsl(11,100%,57%)",
          300: "hsl(11,100%,67%)",
          200: "hsl(11,100%,77%)",
          100: "hsl(11,100%,87%)",
          50: "hsl(11,100%,97%)",
        },
        'success': {
          'DEFAULT': 'hsl(34,100%,57%)',
          900: "hsl(101,100%,7%)",
          800: "hsl(101,100%,17%)",
          700: "hsl(101,100%,27%)",
          600: "hsl(101,100%,37%)",
          500: "hsl(101,100%,47%)",
          400: "hsl(101,100%,57%)",
          300: "hsl(101,100%,67%)",
          200: "hsl(101,100%,77%)",
          100: "hsl(101,100%,87%)",
          50: "hsl(101,100%,97%)",
        },
        'warning': {
          'DEFAULT': 'hsl(34,100%,57%)',
          900: "hsl(34,100%,7%)",
          800: "hsl(34,100%,17%)",
          700: "hsl(34,100%,27%)",
          600: "hsl(34,100%,37%)",
          500: "hsl(34,100%,47%)",
          400: "hsl(34,100%,57%)",
          300: "hsl(34,100%,67%)",
          200: "hsl(34,100%,77%)",
          100: "hsl(34,100%,87%)",
          50: "hsl(34,100%,97%)",
        },
      },
      fontFamily:{
        sans: ['(--var-font-montserrat)'],
        
      },
      fontSize: {
        'sm': ['12px', {
         lineHeight: '20px',
        }],
        'base': ['16px', {
          lineHeight: '1.4',
        }],
        'md': [ '20px', {
          lineHeight: '1.3',
        }],
        'lg': [ '24px', {
          lineHeight: '1.3',
        }],
        'xl': [ '30px',{
          lineHeight: '1.3',
        }],
        '2xl': ['39.06px', {
          lineHeight: '1.3',
        }],
        '3xl': [ '48.83px', {
          lineHeight: '1.3',
        }],
        '4xl': [ '61.29px', {
          lineHeight: '1.3',
        }],
        '5xl': [ '76.29px', {
          lineHeight: '72px',
        }],
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
