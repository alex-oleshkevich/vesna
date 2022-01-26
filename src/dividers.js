const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.divider': {
            position: 'relative',

            '.divider-left': {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',

                '.divider-inner': {
                    width: '100%',
                    borderTopWidth: '1px',
                    borderColor: theme('colors.gray.200'),
                },
            },

            '.divider-right': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',

                '.divider-inner': {
                    paddingLeft: theme('spacing.2'),
                    paddingRight: theme('spacing.2'),
                    backgroundColor: theme('colors.white'),
                    fontSize: theme('fontSize.sm'),
                },
            },
        },
    });
});
