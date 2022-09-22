const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: 'auto',
        },
        'table caption': {
            marginBottom: theme('spacing.2'),
        },
        'table th': {
            fontWeight: theme('fontWeight.medium'),
            borderBottom: `2px solid ${theme('colors.gray.200')}`,
            textAlign: 'left',
        },
        'table th a': {
            display: 'block',
            color: theme('colors.base'),
        },
        'table th a:hover': {},
        'table th, table td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.3'),
            lineHeight: theme('leading.5'),
        },
        'table th:first-child, table td:first-child': {
            borderTopLeftRadius: theme('borderRadius.DEFAULT'),
        },
        'table th:last-child, table td:last-child': {
            borderTopRightRadius: theme('borderRadius.DEFAULT'),
        },
        'table td': {
            color: theme('colors.gray.800'),
        },
        'table.hover tbody tr:hover': {
            backgroundColor: theme('colors.gray.50'),
        },
        'table.striped tbody tr:nth-of-type(even)': {
            backgroundColor: theme('colors.gray.50'),
        },
        'table.bordered td': {
            border: '1px solid',
            borderColor: theme('colors.gray.200'),
        },
        'table.offset tbody:before': {
            content: '"@"',
            display: 'block',
            lineHeight: '16px',
            textIndent: '-99999px',
        },
    });
});
