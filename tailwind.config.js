// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
import { heroui } from '@heroui/react'

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        screen: '100vw',
      },
      opacity: {
        15: '0.15',
        35: '0.35',
        65: '0.65',
        85: '0.85',
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        ripple: 'ripple 4s ease-in-out infinite',
        'cell-ripple': 'cell-ripple var(--duration, 200ms) ease-out none 1 var(--delay, 0ms)',
        twinkle: 'twinkle 2.6s ease-in-out infinite',
        wiggle: 'wiggle 3.2s ease-in-out infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        ripple: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.08)',
            opacity: '0.5',
          },
        },
        'cell-ripple': {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.4' },
        },
        // Sparkles gently grow and turn
        twinkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(0.75) rotate(20deg)', opacity: '0.7' },
        },
        // Sticker sways a little, then rests
        wiggle: {
          '0%, 60%, 100%': { transform: 'rotate(-12deg)' },
          '70%': { transform: 'rotate(-4deg)' },
          '80%': { transform: 'rotate(-16deg)' },
          '90%': { transform: 'rotate(-9deg)' },
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
        script: ['var(--font-meow)'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      colors: {
        // Teal-based scale so existing primary-* usages follow the palette
        primary: {
          50: '#EFF7F7',
          100: '#D9ECED',
          200: '#B6DADC',
          300: '#8DC3C7',
          400: '#60A8AD',
          500: '#3B777B',
          600: '#346A6E',
          700: '#2D5B5E',
          800: '#274B4E',
          900: '#213F41',
          950: '#122426',
        },
        // Warm neutral so leftover gray-* usages sit well on cream paper
        gray: colors.stone,
        // Core palette (light mode). `deep` = text-safe on cream, `muted` = dark mode blocks
        coral: { DEFAULT: '#E8A497', deep: '#9A4F40', muted: '#C98B7F' },
        blush: { DEFAULT: '#F0C5BC', muted: '#CFA59C' },
        sand: { DEFAULT: '#E5D4B7', muted: '#B7A788' },
        cocoa: {
          DEFAULT: '#665132',
          light: '#7A6447',
          800: '#3A2D1B',
          900: '#2A2118',
          950: '#1F1811',
        },
        teal: { DEFAULT: '#60A8AD', deep: '#3B777B', muted: '#579A9F' },
        cream: { DEFAULT: '#FBF7F0', paper: '#FFFDF8' },
        'sky-stripe': '#9DBFDB',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.cocoa.DEFAULT'),
            '--tw-prose-headings': theme('colors.cocoa.800'),
            '--tw-prose-lead': theme('colors.cocoa.light'),
            '--tw-prose-bold': theme('colors.cocoa.800'),
            '--tw-prose-counters': theme('colors.coral.deep'),
            '--tw-prose-bullets': theme('colors.coral.DEFAULT'),
            '--tw-prose-hr': theme('colors.sand.DEFAULT'),
            '--tw-prose-quotes': theme('colors.cocoa.800'),
            '--tw-prose-quote-borders': theme('colors.coral.DEFAULT'),
            '--tw-prose-captions': theme('colors.cocoa.light'),
            '--tw-prose-th-borders': theme('colors.sand.DEFAULT'),
            '--tw-prose-td-borders': theme('colors.sand.DEFAULT'),
            '--tw-prose-invert-body': theme('colors.sand.DEFAULT'),
            '--tw-prose-invert-headings': theme('colors.cream.DEFAULT'),
            '--tw-prose-invert-lead': theme('colors.sand.DEFAULT'),
            '--tw-prose-invert-bold': theme('colors.cream.DEFAULT'),
            '--tw-prose-invert-counters': theme('colors.coral.DEFAULT'),
            '--tw-prose-invert-bullets': theme('colors.coral.muted'),
            '--tw-prose-invert-hr': theme('colors.cocoa.light'),
            '--tw-prose-invert-quotes': theme('colors.cream.DEFAULT'),
            '--tw-prose-invert-quote-borders': theme('colors.coral.muted'),
            '--tw-prose-invert-captions': theme('colors.sand.DEFAULT'),
            '--tw-prose-invert-th-borders': theme('colors.cocoa.light'),
            '--tw-prose-invert-td-borders': theme('colors.cocoa.light'),
            a: {
              color: theme('colors.teal.deep'),
              textDecorationColor: theme('colors.coral.DEFAULT'),
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.cocoa.800'),
                textDecorationColor: theme('colors.teal.DEFAULT'),
              },
              code: { color: theme('colors.teal.deep') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.coral.deep'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.teal.DEFAULT'),
              textDecorationColor: theme('colors.coral.muted'),
              '&:hover': {
                color: theme('colors.cream.DEFAULT'),
              },
              code: { color: theme('colors.teal.DEFAULT') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.cream.DEFAULT'),
            },
            code: {
              color: theme('colors.coral.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), heroui()],
}
