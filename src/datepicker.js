const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.datepicker': {
            display: 'inline-flex',
            flexDirection: 'column',

            '&.datepicker-popup': {
                borderWidth: '1px',
                borderColor: theme('colors.gray.100'),
                borderRadius: theme('borderRadius.md'),
                padding: theme('spacing.6'),
                boxShadow: theme('boxShadow.lg'),
            },

            '&.datepicker-daterange': {
                '.daterange-body': {
                    display: 'flex',
                    gap: theme('spacing.6'),
                },

                '.calendar': {
                    paddingBottom: theme('spacing.2'),
                },
                
                '.calendar header': {
                    justifyContent: 'start',
                    gap: theme('spacing.6'),
                },

                '.calendar:last-child header': {
                    gap: theme('spacing.6'),
                    justifyContent: 'end',
                },
            },

            aside: {
                borderRightWidth: '1px',
                borderColor: theme('colors.gray.200'),
                marginRight: theme('spacing.4'),
                display: 'flex',
                flexDirection: 'column',
                paddingRight: theme('spacing.4'),
                paddingTop: theme('spacing.1'),
                paddingBottom: theme('spacing.1'),

                button: {
                    paddingTop: theme('spacing.1'),
                    paddingBottom: theme('spacing.1'),
                    paddingLeft: theme('spacing.4'),
                    paddingRight: theme('spacing.4'),
                    lineHeight: theme('lineHeight.6'),
                    textAlign: 'left',
                    fontSize: theme('fontSize.sm'),
                    width: theme('spacing.32'),
                    borderRadius: theme('borderRadius.md'),

                    '&:hover, &.active': {
                        backgroundColor: theme('colors.gray.50'),
                    },

                    '&:active': {
                        backgroundColor: theme('colors.gray.100'),
                    },

                    '&:not(:last-child)': {
                        marginBottom: theme('spacing.2'),
                    },
                },
            },

            footer: {
                display: 'flex',
                gap: theme('spacing.2'),
                paddingTop: theme('spacing.3'),
                borderTopWidth: '1px',
                borderColor: theme('colors.gray.200'),
            },
        },
    });
});
