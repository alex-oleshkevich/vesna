const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.spinner': {
            overflow: 'visible',
            height: theme('spacing.8'),
            width: theme('spacing.8'),
            color: theme('colors.white'),
            position: 'relative',
            backgroundColor: 'transparent',
            borderRadius: theme('borderRadius.full'),
            borderWidth: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,

            svg: {
                overflow: 'visible',
                height: '100%',
                width: '100%',
                fontSize: '2.8rem',
                color: theme('colors.gray.700'),

                circle: {
                    fill: 'transparent',
                    strokeWidth: theme('spacing')['1.5'],
                    strokeLinecap: 'round',
                    transformOrigin: '50% 50%',
                },
            },
        },

        // progress
        '.spinner-progress': {
            svg: {
                fontSize: '2.5rem',
                circle: {
                    '&:last-child': {
                        stroke: theme('colors.primary.400'),
                    },
                },
            },
        },

        // indeterminate
        '.spinner-indeterminate': {
            svg: {
                animation: '2s linear infinite both indeterminate-spinner-container',
            },
            circle: {
                strokeDasharray: 285,
                stroke: theme('colors.gray.300'),
                animation: '1.4s ease-in-out infinite both indeterminate-spinner',
            },
        },

        // colors
        ':is(.spinner-success, .spinner-warning, .spinner-error) svg': {
            height: theme('spacing.6'),
            width: theme('spacing.6'),
        },
        '.spinner-success': {
            borderColor: theme('colors.green.600'),
            backgroundColor: theme('colors.green.500'),

            svg: {
                color: theme('colors.white'),
            },

            '&.spinner-sm': {
                backgroundColor: 'transparent',
                svg: {
                    color: theme('colors.green.500'),
                },
            },
        },

        '.spinner-warning': {
            backgroundColor: theme('colors.yellow.500'),
            borderColor: theme('colors.yellow.600'),

            svg: {
                color: theme('colors.yellow.800'),
            },

            '&.spinner-sm': {
                backgroundColor: 'transparent',
                svg: {
                    color: theme('colors.yellow.700'),
                },
            },
        },

        '.spinner-error': {
            backgroundColor: theme('colors.red.500'),
            borderWidth: '2px',
            borderColor: theme('colors.red.600'),
            svg: {
                color: theme('colors.white'),
            },

            '&.spinner-sm': {
                backgroundColor: 'transparent',
                svg: {
                    color: theme('colors.red.500'),
                },
            },
        },

        // sizes
        '.spinner-sm': {
            border: 0,
            height: theme('spacing.6'),
            width: theme('spacing.6'),
            backgroundColor: 'transparent',
        },
        '.spinner-lg': {
            height: theme('spacing.12'),
            width: theme('spacing.12'),
        },

        // animations
        '@keyframes indeterminate-spinner-container': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(270deg)',
            },
        },

        '@keyframes indeterminate-spinner': {
            '0%, 25%': {
                strokeDashoffset: 280,
                transform: 'rotate(0)',
            },
            '50%, 75%': {
                strokeDashoffset: 75,
                transform: 'rotate(45deg)',
            },
            '100%': {
                strokeDashoffset: 280,
                transform: 'rotate(360deg)',
            },
        },
    });
});
