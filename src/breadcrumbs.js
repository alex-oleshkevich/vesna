const plugin = require('tailwindcss/plugin');
const { svgToDataURL } = require('./icons');

const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#B0BABF">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
</svg>`;

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.breadcrumbs': {
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontSize: theme('fontSize.base'),
            color: theme('colors.gray.800'),
            lineHeight: theme('lineHeight.6'),

            a: {
                color: theme('colors.gray.800'),
                paddingLeft: theme('spacing')['1.5'],
                paddingRight: theme('spacing')['1.5'],
                display: 'flex',
                alignItems: 'center',
                borderRadius: theme('borderRadius.DEFAULT'),

                '> svg, > img': {
                    width: theme('spacing.6'),
                    height: theme('spacing.6'),
                    marginRight: theme('spacing.1'),
                    color: theme('colors.gray.300'),
                }
            },

            '& .active, & .active > a': {
                color: theme('colors.gray.900'),
            },

            li: {
                display: 'flex',
                alignItems: 'center',
            },

            'li:not(:last-child)': {
                marginRight: theme('spacing.2'),
            },

            'li:not(:last-child)::after': {
                content: `" "`,
                backgroundImage: `url(${svgToDataURL(CHEVRON_RIGHT)})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 5px, center',
                backgroundSize: '130%',
                width: theme('spacing.3'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                minHeight: theme('spacing.6'),
            },

            '&.breadcrumbs-lg a': {
                fontSize: theme('fontSize.base'),
            },

            '&.breadcrumbs-section': {
                a: {
                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: theme('colors.gray.50'),
                    },
                },
                '.active a': {
                    backgroundColor: theme('colors.gray.100'),
                },
            },
            
        },
    });
});
