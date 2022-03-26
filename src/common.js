const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        ':root': {
            '--vs-input-padding-sm': `${theme('spacing')['1.5']} ${theme('spacing')['2.5']}`,
            '--vs-input-padding-md': `${theme('spacing.2')} ${theme('spacing.4')}`,
            '--vs-input-padding-lg': `${theme('spacing.2')} ${theme('spacing.4')}`,
            '--vs-input-min-height-sm': theme('spacing.8'),
            '--vs-input-min-height-md': theme('spacing.10'),
            '--vs-input-min-height-lg': theme('spacing.12'),
        },
    });
});
