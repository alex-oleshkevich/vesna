const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        body: {
            margin: '0px',
            color: theme('colors.base'),
            fontSize: theme('fontSize.base'),
            lineHeight: theme('lineHeight.6'),
            fontFamily: theme('fontFamily.sans'),
            '-webkit-font-smoothing': 'antialiased',
        },
        a: {
            color: theme('colors.link'),
        },
        'a:hover': {
            textDecoration: 'underline',
        },
        'p:not(:last-of-type)': {
            marginBottom: theme('spacing.4'),
        },
        'h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6': {
            marginTop: 0,
            marginBottom: theme('spacing.2'),
            fontWeight: 500,
            lineHeight: 1.2,
        },
        'h1, .h1': {
            fontSize: theme('fontSize.4xl'),
        },
        'h2, .h2': {
            fontSize: theme('fontSize.3xl'),
        },
        'h3, .h3': {
            fontSize: theme('fontSize.2xl'),
        },
        'h4, .h4': {
            fontSize: theme('fontSize.xl'),
        },
        'h5, .h5': {
            fontSize: theme('fontSize.lg'),
        },
        'h6, .h6': {
            fontSize: theme('fontSize.base'),
        },
        'mark, .mark': {
            padding: theme('spacing.1'),
            background: theme('colors.yellow.100'),
        },
        'small, .small': {
            fontSize: theme('fontSize.sm'),
        },
        'ul': {
            listStyleType: 'disc',
            paddingLeft: theme('space.6'),
        },
        'ol': {
            listStyleType: 'decimal',
            paddingLeft: theme('space.6'),
        },
        'code, .code': {
            wordWrap: 'break-word',
            backgroundColor: theme('colors.gray.50'),
            padding: theme('spacing.1'),
            borderRadius: '2px',
        },
        'kbd, .kbd': {
            wordWrap: 'break-word',
            color: 'white',
            backgroundColor: theme('colors.gray.900'),
            padding: theme('spacing.1'),
            borderRadius: '4px',
        },
        'dt': {
            fontWeight: theme('fontWeight.semibold')
        },
        '.lead': {
            fontSize: theme('fontSize.lg'),
            fontWeight: 300,
        }
    });
});
