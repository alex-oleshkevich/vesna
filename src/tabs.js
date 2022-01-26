const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.nav': {
            display: 'flex',
        },
        '.nav > *:not(:last-child)': {
            marginRight: theme('spacing.4'),
        },
        '.nav-item': {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        '.nav-link': {
            minHeight: theme('spacing.8'),
            borderBottomWidth: '1px',
            borderColor: theme('colors.gray.300'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: theme('colors.base'),
        },
        '.nav-link:hover': {
            color: theme('colors.primary.700'),
            borderColor: theme('colors.gray.600'),
            textDecoration: 'none',
        },
        '.nav-link.active': {
            color: theme('colors.primary.700'),
            borderColor: theme('colors.primary.500'),
        },
        '.nav-link > *:not(:last-child)': {
            marginRight: theme('spacing')['1.5'],
        },
    });
});
