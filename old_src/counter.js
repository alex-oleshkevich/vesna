const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.counter': {
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme('colors.red.100'),
            backgroundColor: theme('colors.red.500'),
            lineHeight: '22px',
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            borderRadius: theme('borderRadius.xl'),
            height: theme('spacing.6'),
        },
        '.counter-sm': {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
            lineHeight: '18px',
            height: theme('spacing.4'),
            borderRadius: theme('borderRadius.lg'),
        },
        '.counter-lg': {
            lineHeight: '20px',
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.3'),
            borderRadius: theme('borderRadius.2xl'),
            height: theme('spacing.8'),
        },
        '.counter-subtle': {
            color: theme('colors.red.700'),
            backgroundColor: theme('colors.red.200'),
        },
        '.counter-outline': {
            boxSizing: 'border-box',
            borderWidth: '1px',
            borderColor: theme('colors.red.200'),
            color: theme('colors.red.700'),
            backgroundColor: 'transparent',
        },
    });
});
