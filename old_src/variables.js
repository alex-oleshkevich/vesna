const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
    function generateColorVariables(color, themeName = null, shades = null) {
        themeName = themeName ? themeName : color;
        if (!shades) {
            shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
        }
        return Object.fromEntries(shades.map(shade => [`--${color}-${shade}`, theme(`colors.${themeName}.${shade}`)]));
    }

    addBase({
        ':root': {
            ...generateColorVariables('dark-gray', 'darkGray', [900, 800, 700, 600, 500]),
            ...generateColorVariables('mid-gray', 'midGray', [900, 800, 700, 600, 500]),
            ...generateColorVariables('light-gray', 'lightGray', [900, 800, 700, 600, 500]),
            ...generateColorVariables('gray'),
            ...generateColorVariables('primary'),
            ...generateColorVariables('blue'),
            ...generateColorVariables('red'),
            ...generateColorVariables('green'),
            ...generateColorVariables('yellow'),
            ...generateColorVariables('purple'),
            ...generateColorVariables('teal'),
        },
    });
});
