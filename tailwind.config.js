// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  // darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  keyframes: {
    gradient: {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  },
  // Custom animation using the keyframes
  animation: {
    gradient: 'gradient 3s ease infinite',
  },
  theme: {
    extend: {
      backgroundImage: {
        'wave-svg': "url('./src/assets/wavebg.svg')",
      },
      background: {
        'primary' : '-red-400'
      },
      
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
  ],
};
