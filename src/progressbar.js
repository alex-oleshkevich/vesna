const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        'progress, .progress::-webkit-progress-bar, .progress': {
            appearance: 'none',
            borderRadius: theme('borderRadius.DEFAULT'),
            height: theme('spacing.4'),
            width: '100%',
            backgroundColor: theme('colors.primary.200'),
            overflow: 'hidden',
            display: 'flex',
            fontSize: theme('fontSize.sm'),
        },
        'progress::-webkit-progress-value, .progress-bar': {
            transition: 'width .6s ease',
            backgroundColor: theme('colors.primary.500'),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            color: theme('colors.white'),
        },
        '.progress-sm': {
            fontSize: 0,
            height: theme('spacing')['1.5'],
        },
        '.progress-lg': {
            height: theme('spacing.6'),
            fontSize: theme('fontSize.sm'),
        },
        '.progress.striped > .progress-bar, .progress-bar-striped': {
            backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)`,
            backgroundSize: '1rem 1rem',
        },
    });
});
