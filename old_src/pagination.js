const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.pagination': {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',

            '> *:not(:last-child)': {
                marginRight: theme('spacing.1'),
            },

            'li, .page-item': {
                a: {
                    color: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: theme('lineHeight.5'),
                    paddingLeft: theme('spacing.3'),
                    paddingRight: theme('spacing.3'),
                    paddingTop: theme('spacing')['2'],
                    paddingBottom: theme('spacing')['2'],
                    borderRadius: theme('borderRadius.md'),
                    fontWeight: theme('fontWeight.medium'),

                    '&:hover': {
                        backgroundColor: theme('colors.gray.50'),
                        textDecoration: 'none',
                    },
                    '&:hover:active': {
                        backgroundColor: theme('colors.gray.100'),
                    },
                },

                '&.active a': {
                    color: theme('colors.primary.900'),
                    backgroundColor: theme('colors.primary.200'),
                },

                '&.disabled': {
                    cursor: 'not-allowed',
                },

                '&.disabled a': {
                    color: theme('colors.gray.400'),
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },

                '&.active a:active': {
                    backgroundColor: theme('colors.primary.300'),
                },
            },
        },
    });
});
