import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

const tailwindTheme = {
  ...defaultTheme,
  extend: {
    fontFamily: {
      title: ['var(--font-oxanium)'],
      mono: ['var(--font-ibm-plex-mono)'],
      jediArchives: ['var(--font-poiret-one)'],
    },
    colors: {
      base: {
        DEFAULT: '#101010',
        secondary: 'linear-gradient(#191c20, #000000)',
        tertiary: '#202020',
      },
      complement: {
        DEFAULT: 'linear-gradient(45deg, #cab381, #b48811, #a2790d, #bb9b49)',
        secondary: 'linear-gradient(90deg, #cab381, #b48811, #a2790d, #bb9b49)',
        tertiary: '#7a5d0f',
      },
      vibrant: {
        red: {
          DEFAULT: '#ff8080',
          secondary: '#ff80ff',
        },
        blue: {
          DEFAULT: '#80ffff',
          secondary: '#8088ff',
        },
      },
    },
    backgroundImage: {
      complement: 'linear-gradient(45deg, #cab381, #b48811, #a2790d, #bb9b49)',
      fetchPlayground: "url('/illustrations/galaxy-bg.svg'), linear-gradient(#191c20, #000)",
    },
    screens: {
      '3xl': '1792px',
      '4xl': '2048px',
    },
    spacing: {
      18: '4.5rem',
      22: '5.5rem',
      112: '28rem',
      240: '60rem',
    },
    animation: {
      fadeIn: 'fadeIn 3s ease-in',
      fadeInUp: 'fadeInUp 3s ease-in',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(2rem)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      growHorizontal: {
        '0%': { transform: 'scaleX(0)' },
        '100%': { transform: 'scaleX(1)' },
      },
    },
  },
} satisfies Config['theme']

export { tailwindTheme }
