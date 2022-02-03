const plugin = require('tailwindcss/plugin');

const inputSelectors = [
    '.form-control',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="url"]',
    'input[type="tel"]',
    'input[type="date"]',
    'input[type="datetime-local"]',
    'input[type="file"]',
    'input[type="color"]',
    'input[type="month"]',
    'input[type="password"]',
    'input[type="search"]',
    'input[type="week"]',
    'select',
    'textarea',
];

module.exports = plugin(function ({ addBase, addComponents, theme }) {
    addBase({
        [inputSelectors.join(', ')]: {
            '--vs-form-input-height': 'var(--vs-input-height-md)',
            '--vs-form-input-padding': 'var(--vs-input-padding-md)',
            minHeight: 'var(--vs-form-input-height)',
            padding: 'var(--vs-form-input-padding)',
            appearance: 'none',
            backgroundColor: 'white',
            transition: 'all 150ms ease-in-out',
            borderWidth: '1px',
            borderColor: theme('colors.gray.200'),
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: theme('borderRadius.md'),
            fontSize: theme('fontSize.sm'),
            lineHeight: theme('lineHeight.5'),

            '&::placeholder': {
                color: theme('colors.gray.300'),
            },

            '&:focus': {
                outline: 'none',
                borderColor: theme('colors.primary.200'),
                boxShadow: `0 0 0 0.2rem ${theme('colors.ring')}`,
            },

            '&:disabled': {
                color: theme('colors.gray.400'),
                backgroundColor: theme('colors.gray.50'),
                cursor: 'not-allowed',
            },

            '&[readonly]': {
                cursor: 'not-allowed',
            },

            '&.form-control-sm': {
                '--vs-form-input-height': 'var(--vs-input-height-sm)',
                '--vs-form-input-padding': 'var(--vs-input-padding-sm)',
            },
            '&.form-control-lg': {
                '--vs-form-input-height': 'var(--vs-input-height-lg)',
                '--vs-form-input-padding': 'var(--vs-input-padding-lg)',
            },
        },
        'input[type="checkbox"], input[type="radio"]': {
            '--vs-form-checkbox-size': theme('spacing.4'),
            appearance: 'none',
            padding: 0,
            display: 'inline-block',
            verticalAlign: 'middle',
            backgroundOrigin: 'border-box',
            userSelect: 'none',
            flexShrink: 0,
            height: 'var(--vs-form-checkbox-size)',
            width: 'var(--vs-form-checkbox-size)',
            borderRadius: theme('borderRadius.DEFAULT'),
            backgroundColor: theme('colors.gray.50'),
            borderWidth: '1px',
            borderColor: theme('colors.gray.300'),
            color: theme('colors.primary.500'),

            '&:hover:not(:disabled)': {
                backgroundColor: theme('colors.gray.100'),
            },
            '&:active:not(:disabled)': {
                backgroundColor: theme('colors.gray.200'),
            },
            '&:focus:not(:disabled)': {
                outline: 'none',
                boxShadow: `0 0 0 0.2rem ${theme('colors.ring')}`,
            },
            '&:checked:hover': {
                backgroundColor: theme('colors.primary.600'),
            },
            '&:checked:active': {
                backgroundColor: theme('colors.primary.700'),
            },
            '&:checked': {
                borderColor: 'transparent',
                backgroundColor: 'currentColor',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
            },
            '&:disabled:not(:checked)': {
                opacity: 0.5,
            },
            '&:disabled:checked': {
                backgroundColor: theme('colors.gray.200'),
            },
            '&.form-control-sm': {
                '--vs-form-checkbox-size': theme('spacing.3'),
            },
            '&.form-control-lg': {
                '--vs-form-checkbox-size': theme('spacing.5'),
            },
        },
        'input[type="checkbox"]': {},
        'input[type="checkbox"]:checked:not(:disabled)': {
            backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
        },
        'input[type="checkbox"]:indeterminate': {
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")`,
        },
        'input[type="radio"]': {
            borderRadius: '100%',
        },
        'input[type="radio"]:checked': {
            backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
        },

        fieldset: {
            display: 'block',
        },
        'fieldset > legend, .form-legend': {
            fontSize: theme('fontSize.lg'),
            borderBottomWidth: '1px',
            borderColor: theme('colors.gray.300'),
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.4'),
            display: 'block',
            fontWeight: theme('fontWeight.medium'),
        },
    });

    addComponents({
        '.form-group': {
            marginBottom: theme('spacing.4'),
        },
        '.form-group > label, .form-label': {
            display: 'block',
            minHeight: theme('spacing.6'),
            marginBottom: theme('spacing.1'),
        },
        '.form-help, .form-text': {
            fontSize: theme('fontSize.sm'),
            color: theme('colors.gray.400'),
            fontSize: theme('fontSize.sm'),
            marginTop: theme('spacing.1'),
        },
        '.form-errors, .invalid-feedback': {
            listStyle: 'none',
            display: 'block',
            padding: 0,
            margin: 0,
            fontSize: theme('fontSize.sm'),
            lineHeight: theme('lineHeight.5'),
            marginTop: theme('spacing.1'),
            color: theme('colors.red.600'),
        },
        '.form-actions': {
            display: 'flex',
            alignItems: 'center',
            gap: theme('spacing.5'),
        },
        '.form-actions > *:not(:last-child)': {
            marginRight: theme('spacing.5'),
        },

        // checkboxes
        '.form-check': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme('spacing.1'),
        },
        '.form-check > *:not(:last-child)': {
            marginRight: theme('spacing.2'),
        },
        '.form-check-inline': {
            display: 'inline-flex',
            marginRight: theme('spacing.4'),
        },
        '.form-check label, .form-check-label': {
            margin: 0,
        },
        '.form-check-inline': {
            display: 'inline-flex',
            marginRight: theme('spacing.4'),
        },

        // switches
        '.form-switch': {
            '--vs-form-switch-height': theme('spacing.4'),
            '--vs-form-switch-width': '1.75rem',
            '--vs-form-switch-radius': '0.5rem',

            '& input': {
                height: 'var(--vs-form-switch-height)',
                width: 'var(--vs-form-switch-width)',
                borderRadius: 'var(--vs-form-switch-radius)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")!important`,
                backgroundColor: theme('colors.gray.400'),

                '&:hover:not(:disabled)': {
                    backgroundColor: theme('colors.gray.500'),
                },

                '&:checked': {
                    backgroundSize: 'auto',
                    backgroundPosition: 'right center',
                },
                '&.form-control-sm': {
                    height: theme('spacing.3'),
                    width: '1.375rem',
                    borderRadius: theme('borderRadius.lg'),
                },
                '&.form-control-lg': {
                    '--form-switch-radius': '0.625rem',
                    height: theme('spacing.5'),
                    width: theme('spacing.8'),
                },
            },
        },

        // input groups
        '.input-group': {
            position: 'relative',

            input: {
                paddingLeft: theme('spacing.10'),
            },

            '.input-addon': {
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: theme('spacing.10'),
                color: theme('colors.gray.400'),
                pointerEvents: 'none',

                svg: {
                    maxHeight: '100%',
                    height: theme('spacing.6'),
                    width: theme('spacing.6'),
                    color: theme('colors.gray.400'),
                },
            },

            '&.input-group-right': {
                '.input-addon': {
                    left: 'auto',
                },
                '.form-control': {
                    padding: 'var(--vs-input-padding-md)!important',
                    paddingRight: theme('spacing.10'),
                },
            },
        },
    });
});
