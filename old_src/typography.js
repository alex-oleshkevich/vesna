const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        body: {
            margin: '0px',
            color: theme('colors.base'),
            fontSize: theme('fontSize.md'),
            lineHeight: theme('lineHeight.6'),
            fontWeight: 400,
            fontFamily: theme('fontFamily.sans'),
            '-webkit-font-smoothing': 'antialiased',
        },
        '.link': {
            color: theme('colors.link'),
        },
        '.link:hover': {
            textDecoration: 'underline',
        },
        'p:not(:last-of-type)': {
            lineHeight: theme('lineHeight.5'),
            marginBottom: theme('spacing.4'),
        },
        'h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6': {
            marginTop: 0,
            marginBottom: theme('spacing.2'),
        },
        'h1, .h1': {
            fontWeight: 700,
            lineHeight: theme('lineHeight.12'),
            fontSize: theme('fontSize.4xl'),
        },
        'h2, .h2': {
            fontWeight: 600,
            fontSize: theme('fontSize.2xl'),
            lineHeight: theme('lineHeight.8'),
        },
        'h3, .h3': {
            fontWeight: 600,
            fontSize: theme('fontSize.xl'),
            lineHeight: theme('lineHeight.6'),
        },
        'h4, .h4': {
            fontWeight: 600,
            fontSize: theme('fontSize.md'),
            lineHeight: theme('lineHeight.6'),
            textTransform: 'uppercase',
        },
        'h5, .h5': {
            fontWeight: 600,
            textTransform: 'uppercase',
            lineHeight: theme('lineHeight.4'),
            fontSize: theme('fontSize.sm'),
        },
        'h6, .h6': {
            fontWeight: 600,
            textTransform: 'uppercase',
            lineHeight: theme('lineHeight.4'),
            fontSize: theme('fontSize.sm'),
        },
        'mark, .mark': {
            padding: theme('spacing.1'),
            background: theme('colors.yellow.100'),
        },
        'small, .small': {
            fontSize: theme('fontSize.sm'),
        },
        ul: {
            listStyleType: 'disc',
            paddingLeft: theme('space.6'),
        },
        ol: {
            listStyleType: 'decimal',
            paddingLeft: theme('space.6'),
        },
        pre: {
            fontWeight: 400,
            fontSize: theme('fontSize.md'),
            lineHeight: theme('lineHeight.6'),
        },
        'code, .code': {
            wordWrap: 'break-word',
            backgroundColor: theme('colors.light-gray.500'),
            padding: theme('spacing.1'),
            borderRadius: '2px',
            fontWeight: 400,
            lineHeight: theme('lineHeight.6'),
        },
        'kbd, .kbd': {
            wordWrap: 'break-word',
            color: 'white',
            backgroundColor: theme('colors.dark-gray.900'),
            padding: theme('spacing.1'),
            borderRadius: '4px',
        },
        dt: {
            fontWeight: theme('fontWeight.semibold'),
        },
        '.lead': {
            fontSize: theme('fontSize.lg'),
        },
    });
});
