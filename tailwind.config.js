module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md-invert': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  variants: {
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
  },
  plugins: [],
}