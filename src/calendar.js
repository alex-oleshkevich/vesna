const plugin = require('tailwindcss/plugin');
const { svgToDataURL } = require('./icons');

const CHEVRON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>`;

const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>`;

const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg>`;

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>`;

const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>`;

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.calendar': {
            width: theme('spacing.56'),
            backgroundColor: theme('colors.white'),

            header: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: theme('spacing.2'),

                '.calendar-month': {
                    display: 'flex',
                    alignItems: 'center',

                    '> *:not(:last-child)': {
                        marginRight: theme('spacing.2'),
                    },

                    button: {
                        fontWeight: theme('fontWeight.semibold'),
                        fontSize: theme('fontSize.base'),
                        height: theme('spacing.6'),
                        borderRadius: theme('borderRadius.DEFAULT'),
                        paddingLeft: theme('spacing.1'),
                        paddingRight: theme('spacing.1'),
                        cursor: 'default',

                        '&.dropdown': {
                            cursor: 'pointer',
                            backgroundImage: `url(${svgToDataURL(CHEVRON_DOWN)})`,
                            backgroundSize: '16px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center right 4px',
                            paddingRight: theme('spacing.6'),

                            '&:hover': {
                                backgroundColor: theme('colors.gray.50'),
                            },

                            '&:active': {
                                backgroundColor: theme('colors.gray.100'),
                            },
                        },
                    },
                },
                '.calendar-month-pager': {
                    display: 'flex',
                    alignItems: 'center',

                    button: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: theme('spacing.6'),
                        width: theme('spacing.6'),
                        borderRadius: theme('borderRadius.DEFAULT'),
                        backgroundSize: '80%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',

                        '&:first-child': {
                            backgroundImage: `url(${svgToDataURL(CHEVRON_LEFT)})`,
                        },

                        '&:last-child': {
                            backgroundImage: `url(${svgToDataURL(CHEVRON_RIGHT)})`,
                        },

                        '&:hover': {
                            backgroundColor: theme('colors.gray.50'),
                        },

                        '&:active': {
                            backgroundColor: theme('colors.gray.100'),
                        },
                    },
                },

                '.calendar-prev-month, .calendar-next-month': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: theme('spacing.6'),
                    width: theme('spacing.6'),
                    borderRadius: theme('borderRadius.DEFAULT'),
                    backgroundSize: '80%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',

                    '&:hover': {
                        backgroundColor: theme('colors.gray.50'),
                    },

                    '&:active': {
                        backgroundColor: theme('colors.gray.100'),
                    },
                },
                '.calendar-prev-month': {
                    backgroundImage: `url(${svgToDataURL(ARROW_LEFT)})`,
                },
                '.calendar-next-month': {
                    backgroundImage: `url(${svgToDataURL(ARROW_RIGHT)})`,
                },
            },
            main: {
                '.calendar-weekdays': {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    color: theme('colors.gray.600'),
                    fontSize: theme('fontSize.base'),
                    borderBottomWidth: '1px',
                    borderColor: theme('colors.gray.200'),
                },

                '.calendar-days': {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',

                    button: {
                        borderRadius: theme('borderRadius.md'),
                        '&:hover': {
                            backgroundColor: theme('colors.gray.50'),
                        },
                        '&:active': {
                            backgroundColor: theme('colors.gray.100'),
                        },
                    },
                },

                ':is(.calendar-weekdays, .calendar-days) button, div': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: theme('spacing.8'),
                    height: theme('spacing.8'),
                    padding: theme('spacing.1'),
                    lineHeight: theme('lineHeight.6'),
                },
            },

            '&.calendar-lg': {
                width: '280px',

                '.calendar-month-pager': {
                    button: {
                        height: theme('spacing.10'),
                        width: theme('spacing.10'),
                    },
                },

                main: {
                    ':is(.calendar-weekdays, .calendar-days) button, div': {
                        height: theme('spacing.10'),
                        width: theme('spacing.10'),
                    },
                },

                '.calendar-prev-month, .calendar-next-month': {
                    height: theme('spacing.10'),
                    width: theme('spacing.10'),
                    backgroundSize: theme('spacing.6'),
                },
            },
            '.is-past-month, .is-future-month': {
                color: theme('colors.gray.300'),
            },

            '.is-today': {
                fontWeight: theme('fontWeight.semibold'),
                color: theme('colors.primary.600'),
            },

            '.is-selected, .is-range-start, .is-range-end': {
                color: theme('colors.white'),
                backgroundColor: theme('colors.primary.500'),
                '&:hover': {
                    backgroundColor: theme('colors.primary.600') + '!important',
                },
            },

            '.is-range-start': {
                borderTopRightRadius: '0!important',
                borderBottomRightRadius: '0!important',
            },

            '.is-in-range': {
                borderRadius: '0!important',
                backgroundColor: theme('colors.primary.200'),

                '&:hover': {
                    backgroundColor: theme('colors.primary.300') + '!important',
                },
            },

            '.is-range-end': {
                borderTopLeftRadius: '0!important',
                borderBottomLeftRadius: '0!important',
            },

            '.is-excluded': {
                textDecoration: 'line-through',
                color: theme('colors.gray.300'),
            },
        },
    });
});
