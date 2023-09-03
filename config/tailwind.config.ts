import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react'

import { tailwindTheme } from '../src/lib/tailwind-theme'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: tailwindTheme,
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config
