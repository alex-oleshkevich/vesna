const plugin = require('tailwindcss/plugin');
const { ICON_CLOSE_URL } = require('./icons');

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
            backgroundImage: `url(${ICON_CLOSE_URL})`,
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
