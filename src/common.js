const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        ':root': {
            '--vs-input-padding-sm': `${theme('spacing.1')} ${theme('spacing.2')}`,
            '--vs-input-padding-md': `${theme('spacing.2')} ${theme('spacing.4')}`,
            '--vs-input-padding-lg': `${theme('spacing.3')} ${theme('spacing.4')}`,
        },
    });
});
