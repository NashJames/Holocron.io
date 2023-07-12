import type { Config } from 'tailwindcss'

import { tailwindTheme } from './src/lib/tailwind-theme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: tailwindTheme,
  plugins: [],
} satisfies Config
