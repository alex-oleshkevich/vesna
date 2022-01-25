const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.close': {
            border: 0,
            borderRadius: theme('borderRadius.full'),
            color: theme('colors.gray.800'),
            width: theme('spacing.6'),
            height: theme('spacing.6'),
            padding: theme('spacing.1'),
            boxSizing: 'content-box',
            background: `transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' /%3E%3C/svg%3E") center / 1rem auto no-repeat`,
            transition: 'background 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.close:hover': {
            backgroundColor: theme('colors.gray.50'),
        },
        '.close:active:not(:disabled)': {
            backgroundColor: theme('colors.gray.100'),
        },
        '.close:focus:not(:disabled)': {
            outline: 0,
            boxShadow: `0 0 0 0.2rem ${theme('colors.ring')}`,
        },
    });
});
