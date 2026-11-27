// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
import { heroui } from '@heroui/react'

/*
 * "Designer's canvas" palette: clean off-white canvas, near-black ink, and pastel accents.
 * Each accent has a soft fill (DEFAULT), a `strong` fill for small solid shapes, and a
 * `deep` shade that is text-safe on white.
 */
const ink = { DEFAULT: '#16161D', soft: '#4A4A5A', muted: '#6E6E80' }
const canvas = { DEFAULT: '#F7F6FB', paper: '#FFFFFF' }
const night = { DEFAULT: '#0E0E13', card: '#17171F', line: '#2A2A36', text: '#ECEBF5' }
const lilac = { DEFAULT: '#E7DBFF', strong: '#B794F6', deep: '#6D3FD0', muted: '#B9A6E0' }
const sky = { DEFAULT: '#D6E8FF', strong: '#3D8BFF', deep: '#1A5FD6', muted: '#9DBDEB' }
const rose = { DEFAULT: '#FFD6DE', strong: '#FF5A6E', deep: '#C8243F', muted: '#E3A3B0' }
const butter = { DEFAULT: '#FFF1B8', strong: '#FFD84D', deep: '#8A6500', muted: '#E3D08A' }
const mint = { DEFAULT: '#D3F5E3', strong: '#4FD69C', deep: '#127A50', muted: '#9FD8B9' }
const peri = { DEFAULT: '#E3E4FF', strong: '#8B8FF8' }

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.{mdx,ts}',
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
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        marquee: 'marquee 36s linear infinite',
        'marquee-reverse': 'marquee 36s linear infinite reverse',
        'spin-slow': 'spin 14s linear infinite',
        blink: 'blink 1.1s steps(1) infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
        },
        ripple: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.5' },
        },
        'cell-ripple': {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.4' },
        },
        twinkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(0.75) rotate(20deg)', opacity: '0.7' },
        },
        wiggle: {
          '0%, 60%, 100%': { transform: 'rotate(-8deg)' },
          '70%': { transform: 'rotate(-2deg)' },
          '80%': { transform: 'rotate(-12deg)' },
          '90%': { transform: 'rotate(-6deg)' },
        },
        // Gentle bob used by floating tags and stickers. `--r` keeps each item's own tilt.
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-10px) rotate(var(--r, 0deg))' },
        },
        // Soft gradient blobs drifting behind the hero
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.95)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-body)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
        note: ['var(--font-note)', ...fontFamily.sans],
      },
      boxShadow: {
        card: '0 1px 2px rgba(22,22,29,0.04), 0 10px 30px -12px rgba(22,22,29,0.16)',
        lift: '0 2px 4px rgba(22,22,29,0.05), 0 24px 48px -16px rgba(22,22,29,0.25)',
        note: '0 1px 1px rgba(22,22,29,0.06), 0 12px 24px -10px rgba(22,22,29,0.28)',
        glow: '0 0 0 6px rgba(61,139,255,0.15)',
      },
      colors: {
        ink,
        canvas,
        night,
        lilac,
        sky,
        rose,
        butter,
        mint,
        peri,
        // Primary follows the selection blue so starter-blog `primary-*` classes match
        primary: {
          50: '#EEF5FF',
          100: '#D6E8FF',
          200: '#B3D3FF',
          300: '#85B7FF',
          400: '#5C9DFF',
          500: '#3D8BFF',
          600: '#1A5FD6',
          700: '#164FB0',
          800: '#143F8A',
          900: '#12336E',
          950: '#0B1F45',
        },
        gray: colors.zinc,

        // Legacy names from the previous theme, mapped onto the new palette so any
        // older page or MDX component still renders in the new colours.
        cocoa: {
          DEFAULT: ink.soft,
          light: ink.muted,
          800: ink.DEFAULT,
          900: night.card,
          950: night.DEFAULT,
        },
        cream: { DEFAULT: night.text, paper: canvas.paper },
        coral: { DEFAULT: rose.DEFAULT, deep: rose.deep, muted: rose.muted },
        blush: { DEFAULT: lilac.DEFAULT, muted: lilac.muted },
        sand: { DEFAULT: peri.DEFAULT, muted: '#B8B9E6' },
        teal: { DEFAULT: sky.strong, deep: sky.deep, muted: sky.muted },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': ink.soft,
            '--tw-prose-headings': ink.DEFAULT,
            '--tw-prose-lead': ink.muted,
            '--tw-prose-bold': ink.DEFAULT,
            '--tw-prose-counters': sky.deep,
            '--tw-prose-bullets': sky.strong,
            '--tw-prose-hr': '#E6E4EF',
            '--tw-prose-quotes': ink.DEFAULT,
            '--tw-prose-quote-borders': lilac.strong,
            '--tw-prose-captions': ink.muted,
            '--tw-prose-th-borders': '#E6E4EF',
            '--tw-prose-td-borders': '#EFEDF5',
            '--tw-prose-invert-body': '#C9C8D6',
            '--tw-prose-invert-headings': night.text,
            '--tw-prose-invert-lead': '#A9A8B8',
            '--tw-prose-invert-bold': night.text,
            '--tw-prose-invert-counters': sky.strong,
            '--tw-prose-invert-bullets': sky.strong,
            '--tw-prose-invert-hr': night.line,
            '--tw-prose-invert-quotes': night.text,
            '--tw-prose-invert-quote-borders': lilac.strong,
            '--tw-prose-invert-captions': '#A9A8B8',
            '--tw-prose-invert-th-borders': night.line,
            '--tw-prose-invert-td-borders': night.line,
            a: {
              color: sky.deep,
              textDecorationColor: sky.strong,
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: ink.DEFAULT,
                backgroundColor: sky.DEFAULT,
              },
              code: { color: sky.deep },
            },
            'h1,h2': {
              fontFamily: theme('fontFamily.heading').join(','),
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontFamily: theme('fontFamily.heading').join(','),
              fontWeight: '600',
            },
            code: {
              color: rose.deep,
            },
          },
        },
        invert: {
          css: {
            a: {
              color: sky.strong,
              '&:hover': {
                color: night.text,
                backgroundColor: 'rgba(61,139,255,0.18)',
              },
              code: { color: sky.strong },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: night.text,
            },
            code: {
              color: rose.strong,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), heroui()],
}
