const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.dropzone': {
            minHeight: theme('spacing.40'),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: theme('spacing.4'),
            borderWidth: '2px',
            borderStyle: 'dashed',
            borderColor: theme('colors.gray.300'),
            borderRadius: theme('borderRadius.md'),
            padding: theme('spacing.4'),

            'header, .dropzone-icon': {
                svg: {
                    height: theme('spacing.8'),
                    width: theme('spacing.8'),
                    color: theme('colors.gray.400'),
                },
            },

            'main, .dropzone-text': {
                minHeight: theme('spacing.6'),
            },

            '&.active': {
                backgroundColor: theme('colors.green.50'),
                borderColor: theme('colors.green.400'),
            },

            '&.disabled': {
                cursor: 'not-allowed',
                borderColor: theme('colors.gray.100'),

                'header, .dropzone-icon': {
                    svg: {
                        color: theme('colors.gray.300'),
                    },
                },

                'main, .dropzone-text': {
                    color: theme('colors.gray.300'),
                },

            },
        },
    });
});
