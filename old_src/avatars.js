const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.avatar': {
            position: 'relative',
            display: 'inline-block',
            height: theme('spacing.8'),
            width: theme('spacing.8'),

            'img, svg': {
                height: '100%',
                width: '100%',
                borderRadius: theme('borderRadius.full'),
            },

            '.dot': {
                boxShadow: '0px 0px 0px 2px white',
                position: 'absolute',
                bottom: 0,
                right: 0,
                display: 'block',
                borderRadius: theme('borderRadius.full'),
                backgroundColor: theme('colors.green.400'),
                height: theme('spacing.2'),
                width: theme('spacing.2'),
                right: '-2px',
                bottom: '-2px',
            },
        },

        '.avatar-square img, .avatar-square svg': {
            borderRadius: theme('borderRadius.md'),
        },

        '.avatar-xs': {
            // 16px
            height: theme('spacing.4'),
            width: theme('spacing.4'),

            '.dot': {
                height: theme('spacing.1'),
                width: theme('spacing.1'),
            },
        },

        '.avatar-sm': {
            // 24px
            height: theme('spacing.6'),
            width: theme('spacing.6'),

            '.dot': {
                height: theme('spacing')['1.5'],
                width: theme('spacing')['1.5'],
            },
        },

        '.avatar-md': {
            // 32px
        },

        '.avatar-lg': {
            // 48px
            height: theme('spacing.12'),
            width: theme('spacing.12'),

            '.dot': {
                height: theme('spacing.3'),
                width: theme('spacing.3'),
            },
        },

        '.avatar-xl': {
            // 64px
            height: theme('spacing.16'),
            width: theme('spacing.16'),

            '.dot': {
                height: theme('spacing.4'),
                width: theme('spacing.4'),
            },
        },

        '.avatar-2xl': {
            // 80px
            height: theme('spacing.20'),
            width: theme('spacing.20'),

            '.dot': {
                height: theme('spacing.5'),
                width: theme('spacing.5'),
            },
        },

        '.avatar-3xl': {
            // 96px
            height: theme('spacing.24'),
            width: theme('spacing.24'),

            '.dot': {
                height: theme('spacing.6'),
                width: theme('spacing.6'),
            },
        },
    });
});
