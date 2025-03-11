/* eslint-disable no-undef */
// tailwind.config.js
const {
    default: flattenColorPalette,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("tailwindcss/lib/util/flattenColorPalette");


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
                'primary': '-red-400'
            },
            animation: {

                move: "move 5s linear infinite",
                bounce200: 'bounce 1s infinite 200ms',
                bounce400: 'bounce 1s infinite 400ms',
            },
            keyframes: {
                move: {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(200px)" },
                },
            },
        },
    },
    // variants: {
    //     extend: {
    //         backgroundColor: ["hover"],
    //     },
    // },
    plugins: [
        addVariablesForColors,
        require('preline/plugin'),

    ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}