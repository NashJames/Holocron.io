/** @type {import("postcss-load-config").Config} */
module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: { config: './config/tailwind.config.ts' },
    autoprefixer: {},
  },
}
