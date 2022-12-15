const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.upload-file': {
            backgroundColor: theme('colors.gray.50'),
            borderRadius: theme('borderRadius.DEFAULT'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: theme('spacing')['1.5'],
            paddingRight: theme('spacing')['1.5'],
            minHeight: theme('spacing.10'),
            maxWidth: theme('spacing.64'),
        },
        '.upload-file-error': {
            color: theme('colors.red.600'),
            backgroundColor: theme('colors.red.100'),
        },
    });
});
