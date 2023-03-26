module.exports = {
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    './.vitepress/**/*.{html,js,ts,jsx,tsx,vue}',
  ],
}
