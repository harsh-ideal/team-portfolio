import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        dark: {
          DEFAULT: '#0f172a',
          100: '#1e293b',
          200: '#334155',
        },
        light: {
          DEFAULT: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cccccc'
        }
      },
      fontFamily: {
        // This makes your `font-lexend` class work
        lexend: ['var(--font-lexend)', 'sans-serif'],

        // Optional: Make Lexend the default sans font (recommended!)
        // Then you can just use `font-sans` everywhere instead of `font-lexend`
        sans: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      fontWeight: {
        display: '800',
        heading: '700',
        subheading: '600',
        body: '400',
        light: '300',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-dark': 'linear-gradient(to bottom right, #0f172a, #1e293b, #334155)',
        'gradient-light': 'linear-gradient(to bottom right, #ffffff, #f8fafc)',
        'gradient-accent': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config