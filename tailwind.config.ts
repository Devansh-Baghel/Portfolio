import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-chromate)'],
      },
      keyframes: {
        'blur-in': {
          '0%': {
            filter: 'blur(8px)',
            opacity: '0',
          },
          '100%': {
            filter: 'blur(0px)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'blur-in-100': 'blur-in 100ms ease-out forwards',
        'blur-in-200': 'blur-in 200ms ease-out forwards',
        'blur-in-300': 'blur-in 300ms ease-out forwards',
        'blur-in-400': 'blur-in 400ms ease-out forwards',
        'blur-in-500': 'blur-in 500ms ease-out forwards',
        'blur-in-600': 'blur-in 600ms ease-out forwards',
        'blur-in-700': 'blur-in 700ms ease-out forwards',
        'blur-in-800': 'blur-in 800ms ease-out forwards',
        'blur-in-900': 'blur-in 900ms ease-out forwards',
        'blur-in-1000': 'blur-in 1000ms ease-out forwards',
        'blur-in-1100': 'blur-in 1100ms ease-out forwards',
        'blur-in-1200': 'blur-in 1200ms ease-out forwards',
        'blur-in-1300': 'blur-in 1300ms ease-out forwards',
        'blur-in-1400': 'blur-in 1400ms ease-out forwards',
        'blur-in-1500': 'blur-in 1500ms ease-out forwards',
        'fade-in-100': 'fade-in 100ms ease-out forwards',
        'fade-in-200': 'fade-in 200ms ease-out forwards',
        'fade-in-300': 'fade-in 300ms ease-out forwards',
        'fade-in-400': 'fade-in 400ms ease-out forwards',
        'fade-in-500': 'fade-in 500ms ease-out forwards',
        'fade-in-600': 'fade-in 600ms ease-out forwards',
        'fade-in-700': 'fade-in 700ms ease-out forwards',
        'fade-in-800': 'fade-in 800ms ease-out forwards',
        'fade-in-900': 'fade-in 900ms ease-out forwards',
        'fade-in-1000': 'fade-in 1000ms ease-out forwards',
        'fade-in-1100': 'fade-in 1100ms ease-out forwards',
        'fade-in-1200': 'fade-in 1200ms ease-out forwards',
        'fade-in-1300': 'fade-in 1300ms ease-out forwards',
        'fade-in-1400': 'fade-in 1400ms ease-out forwards',
        'fade-in-1500': 'fade-in 1500ms ease-out forwards',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-motion'),
    require('tailwindcss-animate'),
  ],
};
export default config;
