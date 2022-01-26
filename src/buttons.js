const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.btn': {
            '--vs-btn-padding': 'var(--vs-input-padding-md)',
            '--vs-btn-background': theme('colors.white'),
            '--vs-btn-border-color': theme('colors.gray.200'),
            '--vs-btn-text-color': theme('colors.color.base'),
            '--vs-btn-ring-color': theme('colors.ring'),
            padding: 'var(--vs-btn-padding)',
            background: 'var(--vs-btn-background)',
            color: 'var(--vs-btn-text-color)',
            border: '1px solid var(--vs-btn-border-color)',
            display: 'inline-flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderRadius: theme('borderRadius.md'),
            lineHeight: theme('lineHeight.5'),
            fontWeight: theme('fontWeight.medium'),
            fontSize: theme('fontSize.sm'),
            transition: 'background 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.btn:hover:not(:disabled)': {
            '--vs-btn-background': theme('colors.gray.50'),
        },
        '.btn:active:not(:disabled)': {
            '--vs-btn-background': theme('colors.gray.100'),
        },
        '.btn:focus:not(:disabled)': {
            outline: 0,
            boxShadow: '0 0 0 0.2rem var(--vs-btn-ring-color)',
        },
        '.btn:disabled': {
            '--vs-btn-text-color': theme('colors.gray.400'),
            cursor: 'not-allowed',
        },

        '.btn > svg': {
            height: theme('spacing.6'),
            width: theme('spacing.6'),
            marginRight: theme('spacing.2'),
        },

        // sizes
        '.btn-sm': {
            '--vs-btn-padding': 'var(--vs-input-padding-sm)',
        },
        '.btn-lg': {
            '--vs-btn-padding': 'var(--vs-input-padding-lg)',
        },
        '.btn-lg > svg': {
            marginRight: theme('spacing.3'),
        },

        // colors: primary
        '.btn-primary': {
            '--vs-btn-text-color': 'white',
            '--vs-btn-background': theme('colors.primary.500'),
            borderColor: 'transparent',
        },
        '.btn-primary:disabled': {
            '--vs-btn-text-color': theme('colors.gray.50'),
            '--vs-btn-background': theme('colors.primary.300'),
        },
        '.btn-primary:hover:not(:disabled)': {
            '--vs-btn-background': theme('colors.primary.600'),
        },
        '.btn-primary:active:not(:disabled)': {
            '--vs-btn-background': theme('colors.primary.700'),
        },

        // colors: danger
        '.btn-danger': {
            '--vs-btn-text-color': 'white',
            '--vs-btn-background': theme('colors.red.500'),
            borderColor: 'transparent',
        },
        '.btn-danger:disabled': {
            '--vs-btn-text-color': theme('colors.gray.50'),
            '--vs-btn-background': theme('colors.red.300'),
        },
        '.btn-danger:hover:not(:disabled)': {
            '--vs-btn-background': theme('colors.red.600'),
        },
        '.btn-danger:active:not(:disabled)': {
            '--vs-btn-background': theme('colors.red.700'),
        },

        // colors: success
        '.btn-success': {
            '--vs-btn-text-color': 'white',
            '--vs-btn-background': theme('colors.green.500'),
            borderColor: 'transparent',
        },
        '.btn-success:disabled': {
            '--vs-btn-background': theme('colors.green.300'),
        },
        '.btn-success:hover:not(:disabled)': {
            '--vs-btn-background': theme('colors.green.600'),
        },
        '.btn-success:active:not(:disabled)': {
            '--vs-btn-background': theme('colors.green.700'),
        },

        // colors: warning
        '.btn-warning': {
            '--vs-btn-text-color': theme('colors.yellow.900'),
            '--vs-btn-background': theme('colors.yellow.500'),
            borderColor: 'transparent',
        },
        '.btn-warning:disabled': {
            '--vs-btn-text-color': theme('colors.yellow.700'),
            '--vs-btn-background': theme('colors.yellow.300'),
        },
        '.btn-warning:hover:not(:disabled)': {
            '--vs-btn-background': theme('colors.yellow.600'),
        },
        '.btn-warning:active:not(:disabled)': {
            '--vs-btn-background': theme('colors.yellow.700'),
        },

        // colors: text
        '.btn-text': {
            '--vs-btn-background': 'transparent',
            '--vs-btn-border-color': 'transparent',
        },
        '.btn-text:disabled': {
            '--vs-btn-border-color': 'transparent',
        },

        // icon-only
        '.btn-icon': {
            '--vs-btn-border-color': 'transparent',
            borderRadius: theme('borderRadius.full'),
            padding: theme('spacing.1'),
        },
        '.btn-icon:disabled': {
            '--vs-btn-border-color': 'transparent',
        },
        '.btn-icon > svg': {
            margin: 0,
        },
        '.btn-icon.btn-sm': {
            padding: theme('spacing.0'),
        },
        '.btn-icon.btn-lg': {
            padding: theme('spacing.2'),
        },

        '.btn-dropdown': {
            whiteSpace: 'nowrap',
        },
        '.btn-dropdown::after': {
            display: 'inline-block',
            marginLeft: theme('spacing.2'),
            verticalAlign: theme('spacing.2'),
            content: '""',
            borderTop: `${theme('spacing')["1.5"]} solid`,
            borderRight: `${theme('spacing')["1.5"]} solid transparent`,
            borderLeft: `${theme('spacing')["1.5"]} solid transparent`,
            borderBottom: 0,
            boxSizing: 'border-box',
        },
    });
});
