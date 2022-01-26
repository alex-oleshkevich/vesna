const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.badge': {
            '--vs-badge-padding-y': 'auto',
            '--vs-badge-padding-x': theme('spacing.2'),
            '--vs-badge-height': theme('spacing.6'),
            '--vs-badge-font-size': 'auto',

            paddingTop: 'var(--vs-badge-padding-y)',
            paddingBottom: 'var(--vs-badge-padding-y)',
            paddingLeft: 'var(--vs-badge-padding-x)',
            paddingRight: 'var(--vs-badge-padding-x)',
            height: 'var(--vs-badge-height)',
            fontSize: 'var(--vs-badge-font-size)',
            borderRadius: theme('borderRadius.md'),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: theme('leading.6'),
            fontWeight: theme('fontWeight.semibold'),
            backgroundColor: theme('colors.gray.700'),
            color: theme('colors.white'),
        },

        // sizes
        '.badge-sm': {
            '--vs-badge-padding-y': 0,
            '--vs-badge-padding-x': theme('spacing.1'),
            '--vs-badge-height': theme('spacing.4'),
            '--vs-badge-font-size': theme('fontSize.sm'),
            lineHeight: '16px',
        },
        '.badge-lg': {
            '--vs-badge-padding-y': theme('spacing.1'),
            '--vs-badge-padding-x': theme('spacing.3'),
            '--vs-badge-height': theme('spacing.8'),
        },

        // colors
        '.badge-primary': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.primary.500'),
        },
        '.badge-red': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.red.500'),
        },
        '.badge-green': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.green.500'),
        },
        '.badge-yellow': {
            color: theme('colors.yellow.800'),
            backgroundColor: theme('colors.yellow.500'),
        },
        '.badge-purple': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.purple.500'),
        },
        '.badge-teal': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.teal.500'),
        },
        '.badge-gray': {
            color: theme('colors.gray.700'),
            backgroundColor: theme('colors.gray.100'),
        },
    });
});
