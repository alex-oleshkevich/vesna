const plugin = require('tailwindcss/plugin');
const { ICON_WARNING, svgToDataURL } = require('./icons');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.modal': {
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            top: 0,
            zIndex: 1055,
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            outline: 0,
            backgroundColor: theme('colors.gray')[400]({ opacityValue: 75 }),
            padding: theme('spacing.2'),
        },
        '.modal-dialog': {
            display: 'inline-block',
            borderRadius: theme('borderRadius.md'),
            backgroundColor: theme('colors.white'),
            boxShadow: theme('boxShadow.2xl'),
            padding: theme('spacing.4'),
            width: '100%',
            maxWidth: theme('maxWidth.xl'),
        },
        ':is(.modal-dialog, .modal-content) > *:not(:last-child)': {
            marginBottom: theme('spacing.3'),
        },
        '.modal-header, :is(.modal-dialog, .modal-content) > header': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: theme('fontSize.xl'),
            fontWeight: 500,
            lineHeight: 1.2,
        },
        ':is(.modal-header, .modal-dialog > header, .modal-content > header) h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6':
            {
                marginBottom: 0,
            },
        '.modal-body, :is(.modal-dialog, .modal-content) > main': {
            overflowY: 'auto',
            maxHeight: '60vh',
            scrollbarWidth: 'thin',
        },

        '.modal-footer, :is(.modal-dialog, .modal-content) > footer': {
            display: 'flex',
            flexDirection: 'column',
            gap: theme('spacing.3'),
        },

        '.modal-footer .btn, :is(.modal-dialog, .modal-content) > footer .btn': {
            textAlign: 'center',
        },

        '.modal-errors': {
            paddingLeft: theme('spacing.5'),
            paddingRight: theme('spacing.5'),
            paddingTop: theme('spacing.3'),
            paddingBottom: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
            color: theme('colors.red.700'),
            backgroundColor: theme('colors.red.100'),
        },

        // sizes
        '.modal-sm .modal-dialog': {
            maxWidth: theme('maxWidth.md'),
        },
        '.modal-lg .modal-dialog': {
            maxWidth: theme('maxWidth.2xl'),
        },
        '.modal-xl .modal-dialog': {
            maxWidth: theme('maxWidth.4xl'),
        },

        // confirmation dialog
        '.modal-confirmation': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',

        },
        '.modal-confirmation .modal-dialog': {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            maxWidth: theme('maxWidth.lg'),
        },
        '.modal-confirmation .modal-dialog::before': {
            content: `url(${svgToDataURL(ICON_WARNING)})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            left: 0,
            marginRight: theme('spacing.2'),
            marginBottom: theme('spacing.3'),
            height: theme('spacing.12'),
            width: theme('spacing.12'),
            borderRadius: theme('borderRadius.full'),
            backgroundColor: theme('colors.red.100'),
            position: 'relative',
        },

        '.modal-confirmation .modal-header, .modal-confirmation header': {
            justifyContent: 'center',
        },

        ':is(.modal-confirmation .modal-dialog) .modal-body, main': {
            fontSize: theme('fontSize.sm'),
        },

        [`@media(min-width: ${theme('screens.md')})`]: {
            '.modal-dialog': {
                padding: theme('spacing.6'),
            },

            '.modal-confirmation': {
                justifyContent: 'center',
            },
            '.modal-footer, :is(.modal-dialog, .modal-content) > footer': {
                flexDirection: 'row',
                alignItems: 'center',
            },

            '.modal-confirmation .modal-dialog': {
                flexDirection: 'row',
                textAlign: 'left',
            },

            '.modal-confirmation .modal-dialog::before': {
                marginBottom: 'auto',
            },

            '.modal-confirmation .modal-header, .modal-confirmation header': {
                justifyContent: 'start',
            },

            ':is(.modal-confirmation .modal-dialog) .modal-footer, footer': {
                justifyContent: 'end',
            },
        },
    });
});
