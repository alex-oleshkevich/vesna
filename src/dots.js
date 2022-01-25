const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.dot': {
            height: theme('spacing.2'),
            width: theme('spacing.2'),
            borderRadius: theme('borderRadius.full'),
            display: 'inline-flex',
            borderWidth: '1px',
            borderColor: 'transparent',
            backgroundColor: theme('colors.gray.500'),
        },
        '.dot-green': {
            backgroundColor: theme('colors.green.500'),
        },
        '.dot-red': {
            backgroundColor: theme('colors.red.500'),
        },
        '.dot-primary': {
            backgroundColor: theme('colors.primary.500'),
        },
        '.dot-yellow': {
            backgroundColor: theme('colors.yellow.500'),
        },
        '.dot-purple': {
            backgroundColor: theme('colors.purple.500'),
        },
        '.dot-black': {
            backgroundColor: theme('colors.black'),
        },
        '.dot-white': {
            borderColor: theme('colors.gray.200'),
            backgroundColor: theme('colors.white'),
        },
    });
});
