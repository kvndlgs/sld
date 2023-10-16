/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'darky': {
          'DEFAULT': '#2b353b',
          '900': '#0F1315',
          '800': '#252D32',
          '700': '#3B4951',
          '600': '#4F616D',
          '500': '#657C8B',
          '400': '#8095A3',
          '300': '#9EAEB8',
          '200': '#BBC6CE',
          '100': '#D9DFE3',
          '50': '#F6F8F9',
        },
        'primary': {
          'DEFAULT': '#eccb46',
          '900': "#312802",
          '800': "#624F04",
          '700': "#927707",
          '600': "#C39E09",
          '500': "#F4C60B",
          '400': "#F6D13A",
          '300': "#F8DD6D",
          '200': "#FBE89D",
          '100': "#FDF4CE",
          '50': "#FEF9E7",
        },
        'secondary': {
          'DEFAULT': '#3AF6DF',
          '900': "#02312B",
          '800': "#046256",
          '700': "#079282",
          '600': "#09C3AD",
          '500': "#0BF4D8",
          '400': "#3AF6DF",
          '300': "#6DF8E8",
          '200': "#9DFBEF",
          '100': "#CEFDF7",
          '50': "#E7FEFB",
        },
        'error': {
          'DEFAULT': '#F63A3A',
          '900': "#310202",
          '800': "#620404",
          '700': "#920707",
          '600': "#C30909",
          '500': "#F40B0B",
          '400': "#F63A3A",
          '300': "#F86D6D",
          '200': "#FB9D9D",
          '100': "#FDCECE",
          '50': "#FEE7E7",
        },
        'success': {
          'DEFAULT': '#3AF66F',
          '900': "#02310F",
          '800': "#04621F",
          '700': "#07922E",
          '600': "#09C33D",
          '500': "#0BF44C",
          '400': "#3AF66F",
          '300': "#6DF894",
          '200': "#9DFBB8",
          '100': "#CEFDDB",
          '50': "#E7FEED",
        },
        'warning': {
          'DEFAULT': '#F67E3A',
          '900': "#311B02",
          '800': "#623704",
          '700': "#923907",
          '600': "#C34C09",
          '500': "#F45F0B",
          '400': "#F67E3A",
          '300': "#F89F6D",
          '200': "#FBBF9D",
          '100': "#FDDFCE",
          '50': "#FEEFE7",
        },
      },
      fontFamily:{
        sans: ['(--var-font-montserrat)'],
        
      },
      fontSize: {
        'sm': ['12.80px', {
         lineHeight: '20px',
        }],
        'base': ['17.20px', {
          lineHeight: '1.4',
        }],
        'md': [ '20px', {
          lineHeight: '1.3',
        }],
        'lg': [ '25px', {
          lineHeight: '1.3',
        }],
        'xl': [ '31.25px',{
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
