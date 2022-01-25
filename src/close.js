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
            backgroundImage: `url("data:image/svg+xml,%3Csvg class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundOrigin: 'content-box',
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
