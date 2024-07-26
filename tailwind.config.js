// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  // darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-svg': "url('./src/assets/wavebg.svg')",
      },
      background: {
        'primary' : '-red-400'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
  ],
};
