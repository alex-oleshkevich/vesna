const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.status': {
            display: 'inline-flex',
            alignItems: 'center',
        },
        '.status .dot': {
            marginRight: theme('spacing.2'),
        },
    });
});
