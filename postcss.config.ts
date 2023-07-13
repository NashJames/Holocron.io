import type { Config } from 'postcss-load-config'

export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
} satisfies Config
