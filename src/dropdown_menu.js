const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.dropdown-menu': {
            width: '256px',
            boxShadow: theme('boxShadow.lg'),
            borderRadius: theme('borderRadius.md'),
            borderWidth: '1px',
            borderColor: theme('colors.gray.100'),
            backgroundColor: theme('colors.white'),
            boxSizing: 'border-box',
            listStyle: 'none',
            marginLeft: 0,
            marginRight: 0,
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
            paddingLeft: 0,
            paddingRight: 0,
            fontWeight: theme('fontWeight.medium'),
        },
        '.dropdown-menu li': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            minHeight: theme('spacing.8'),
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            cursor: 'pointer',
            userSelect: 'none',
            color: theme('colors.gray.800'),
        },
        '.dropdown-menu li:hover:not(.disabled)': {
            backgroundColor: theme('colors.gray.50'),
        },
        '.dropdown-menu li.selected:not(.disabled), .dropdown-menu li:active:not(.disabled)': {
            backgroundColor: theme('colors.gray.200'),
        },
        '.dropdown-menu li.disabled': {
            color: theme('colors.gray.400'),
            cursor: 'not-allowed',
        },
        '.dropdown-menu li > button, .dropdown-menu li > a': {
            display: 'flex',
            alignItems: 'center',
        },
        '.dropdown-menu li > button *:not(:last-child), .dropdown-menu li > a > *:not(:last-child)': {
            marginRight: theme('spacing.3'),
        },
        '.dropdown-menu li a': {
            color: 'inherit',
        },
        '.dropdown-menu li a:hover': {
            textDecoration: 'none',
        }
    });
});
