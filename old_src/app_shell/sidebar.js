const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.sidebar': {
            '--vs-sidebar-bg-color': theme('colors.gray.50'),
            '--vs-sidebar-item-color': theme('colors.gray.900'),
            '--vs-sidebar-item-hover-bg': theme('colors.gray.100'),
            '--vs-sidebar-item-active-color': theme('colors.primary.600'),
            '--vs-sidebar-item-active-bg': theme('colors.primary.200'),
            '--vs-sidebar-item-icon-color': theme('colors.gray.400'),
            '--vs-sidebar-item-active-icon-color': theme('colors.primary.500'),
            '--vs-sidebar-heading-color': theme('colors.gray.400'),
            '--vs-sidebar-divider-bg': theme('colors.gray.100'),
            '--vs-sidebar-border-color': theme('colors.gray.200'),
            '--vs-sidebar-width': '280px',

            width: 'var(--vs-sidebar-width)',
            backgroundColor: 'var(--vs-sidebar-bg-color)',
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.3'),
            paddingTop: theme('spacing.5'),
            paddingBottom: theme('spacing.5'),
            borderRightWidth: '1px',
            borderColor: 'var(--vs-sidebar-border-color)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',

            header: {
                marginBottom: theme('spacing.6'),
            },

            footer: {
                marginTop: 'auto',
                paddingTop: theme('spacing.6'),
            },

            '&.sidebar-dark': {
                '--vs-sidebar-bg-color': theme('colors.gray.800'),
                '--vs-sidebar-item-color': theme('colors.gray.100'),
                '--vs-sidebar-item-hover-bg': theme('colors.gray.700'),
                '--vs-sidebar-border-color': theme('colors.gray.600'),
                '--vs-sidebar-heading-color': theme('colors.gray.300'),
                '--vs-sidebar-item-active-color': theme('colors.white'),
                '--vs-sidebar-item-active-bg': theme('colors.primary.500'),
                '--vs-sidebar-item-icon-color': theme('colors.gray.200'),
                '--vs-sidebar-item-active-icon-color': theme('colors.primary.300'),
                '--vs-sidebar-divider-bg': theme('colors.gray.600'),
            },

            '&.sidebar-transparent': {
                '--vs-sidebar-bg-color': 'transparent',
                '--vs-sidebar-border-color': 'transparent',
            },

            '.sidebar-heading': {
                fontSize: theme('fontSize.xs'),
                fontWeight: theme('fontWeight.semibold'),
                minHeight: theme('spacing.8'),
                lineHeight: theme('lineHeight.6'),
                padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
                textTransform: 'uppercase',
                color: 'var(--vs-sidebar-heading-color)',
            },
            '.sidebar-divider, hr': {
                marginTop: theme('spacing.4'),
                marginBottom: theme('spacing.4'),
                height: '1px',
                backgroundColor: 'var(--vs-sidebar-divider-bg)',
                appearance: 'none',
                border: 0,
            },

            '.sidebar-menu': {
                display: 'flex',
                flexDirection: 'column',
                gap: theme('spacing.1'),
                listStyle: 'none',
                margin: 0,
                padding: 0,

                'li a, .sidebar-menu-item': {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    color: 'var(--vs-sidebar-item-color)',
                    fontSize: theme('fontSize.base'),
                    minHeight: theme('spacing.8'),
                    lineHeight: theme('lineHeight.6'),
                    fontWeight: theme('fontWeight.medium'),
                    padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
                    borderRadius: theme('borderRadius.md'),

                    svg: {
                        marginRight: theme('spacing.3'),
                        color: 'var(--vs-sidebar-item-icon-color)',
                    },

                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: 'var(--vs-sidebar-item-hover-bg)',
                    },

                    '.counter, .badge': {
                        marginLeft: 'auto',
                    },

                    '.avatar': {
                        marginRight: theme('spacing.2'),
                    },
                },

                ':is(li.active, .sidebar-menu-item.active) a': {
                    fontWeight: theme('fontWeight.semibold'),
                    color: 'var(--vs-sidebar-item-active-color)',
                    backgroundColor: 'var(--vs-sidebar-item-active-bg)',

                    svg: {
                        color: 'var(--vs-sidebar-item-active-icon-color)',
                    },
                },
            },
        },
    });
});
