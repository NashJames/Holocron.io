import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

const tailwindTheme = {
  ...defaultTheme,
  extend: {
    fontFamily: {
      title: ['var(--font-oxanium)'],
      code: ['var(--font-ibm-plex-mono)'],
      jedi: ['var(--font-poiret-one)'],
    },
    colors: {
      base: {
        DEFAULT: '#101010',
        secondary: 'linear-gradient(#191c20, #000000)',
        tertiary: '#202020',
      },
      complement: {
        DEFAULT: 'linear-gradient(45deg, #cab381, #b48811, #a2790d, #bb9b49)',
        secondary: '#7a5d0f',
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
    spacing: {
      18: '4.5rem',
      22: '5.5rem',
    },
  },
} satisfies Config['theme']

export { tailwindTheme }
