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
          '900': '#0a0c0f',
          '800': '#2b353b',
          '700': '#404f59',
          '600': '#566976',
          '500': '#6b8494',
          '400': '#899da9',
          '300': '#a6b6bf',
          '200': '#c4ced4',
          '100': '#e1e6ea',
          '50': '#f0f2f5',
        },
        'primary': {
          'DEFAULT': '#eccb46',
          '900': "#2e2605",
          '800': "#5c4c0a",
          '700': "#8a720f",
          '600': "#b99813",
          '500': "#e7bd18",
          '400': "#eccb46",
          '300': "#f0d875",
          '200': "#f5e5a3",
          '100': "#faf2d1",
          '50': "#fdf8e8",
        },
        'secondary': {
          'DEFAULT': '#3cf6e0',
          '900': "#056157",
          '800': "#cefdf7",
          '700': "#9efaf0",
          '600': "#6df8e8",
          '500': "#6df8e8",
          '400': "#3cf6e0",
          '300': "#0bf4d8",
          '200': "#09c3ad",
          '100': "#079282",
          '50': "#056157",
        },
        'error': {
          'DEFAULT': 'hsl(0,91,60)',
          '900': "hsl(0,91,10)",
          '800': "hsl(0,91,20)",
          '700': "hsl(0,91,30)",
          '600': "hsl(0,91,40)",
          '500': "hsl(0,91,50)",
          '400': "hsl(0,91,60)",
          '300': "hsl(0,91,70)",
          '200': "hsl(0,91,80)",
          '100': "hsl(0,91,90)",
          '50': "hsl(0,91,95)",
        },
        'success': {
          'DEFAULT': 'hsl(137,91,60)',
          '900': "hsl(137,91,10)",
          '800': "hsl(137,91,20)",
          '700': "hsl(137,91,30)",
          '600': "hsl(137,91,40)",
          '500': "hsl(137,91,50)",
          '400': "hsl(137,91,60)",
          '300': "hsl(137,91,70)",
          '200': "hsl(137,91,80)",
          '100': "hsl(137,91,90)",
          '50': "hsl(137,91,95)",
        },
        'warning': {
          'DEFAULT': 'hsl(33,91,60)',
          '900': "hsl(33,91,10)",
          '800': "hsl(33,91,20)",
          '700': "hsl(33,91,30)",
          '600': "hsl(33,91,40)",
          '500': "hsl(33,91,50)",
          '400': "hsl(33,91,60)",
          '300': "hsl(33,91,70)",
          '200': "hsl(33,91,80)",
          '100': "hsl(33,91,90)",
          '50': "hsl(33,91,95)",
        },
      },
      fontFamily:{
        sans: ['(--var-font-montserrat)'],
        
      },
      fontSize: {
        'sm': ['14px', {
         lineHeight: '20px'
        }],
        'base': ['16px', {
          lineHeight: '24px',
          fontWeight: '600',
        }],
        'md': [ '20px', {
          lineHeight: '28px',
        }],
        'lg': [ '26px', {
          lineHeight: '32px',
        }],
        'xl': [ '32px',{
          lineHeight: '40px',
        }],
        '2xl': ['40px', {
          lineHeight: '48px',
        }],
        '3xl': [ '48px', {
          lineHeight: '56px',
        }],
        '4xl': [ '56px', {
          lineHeight: '64px',
        }],
        '5xl': [ '64px', {
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
