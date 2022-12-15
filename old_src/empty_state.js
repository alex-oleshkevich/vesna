const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.empty-state': {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: theme('spacing.96'),

            figure: {
                marginBottom: theme('spacing.10'),
                svg: {
                    maxWidth: '100%',
                    display: 'inline-block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: 'auto',
                },
            },

            header: {
                fontSize: theme('fontSize.lg'),
                fontWeight: theme('fontWeight.semibold'),
                marginBottom: theme('spacing.2'),
                textAlign: 'center',
            },
            main: {
                color: theme('colors.gray.700'),
                marginBottom: theme('spacing.3'),
                textAlign: 'center',
            },
            footer: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: theme('spacing.3'),
            },
        },
    });
});
