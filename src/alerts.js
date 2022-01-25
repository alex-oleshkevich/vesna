const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.alert': {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
            borderRadius: theme('borderRadius.md'),
            borderWidth: '1px',
            padding: theme('spacing.5'),
            position: 'relative',
        },

        // header
        '.alert header, .alert-heading': {
            fontWeight: theme('fontWeight.semibold'),
            display: 'flex',
            alignItems: 'center',
        },
        '.alert header::before, .alert-heading::before': {
            content: '" "',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: theme('spacing.4'),
            width: theme('spacing.4'),
            marginRight: theme('spacing.4'),
        },
        '.alert header + p, .alert-heading + p': {
            marginTop: theme('spacing.1'),
            marginLeft: theme('spacing.8'),
        },
        ':matches(.alert header, .alert-heading) *:not(:last-child)': {
            marginLeft: theme('spacing.5'),
        },

        // dismissible
        '.alert-dismissible': {
            paddingRight: theme('spacing.16'),
        },
        '.alert-dismissible .close': {
            padding: theme('spacing.5'),
            position: 'absolute',
            borderRadius: theme('borderRadius.sm'),
            right: 0,
            top: 0,
            bottom: 0,
        },
        '.alert-dismissible .close:hover, .alert-dismissible .close:active': {
            backgroundColor: 'transparent',
        },

        // actions
        '.alert-actions': {
            marginTop: theme('spacing.4'),
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme('spacing.8'),
        },
        '.alert-actions *:not(:last-child)': {
            marginRight: theme('spacing.3'),
        },

        // colors: info
        '.alert-info': {
            color: theme('colors.primary.900'),
            borderColor: theme('colors.primary.200'),
            backgroundColor: theme('colors.primary.100'),
        },
        '.alert-info header::before, .alert-info .alert-heading::before': {
            backgroundImage: `url("data:image/svg+xml,%0A%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z' fill='%234094F7'/%3E%3C/svg%3E%0A")`,
        },
        '.alert-info.alert-dismissible .close': {
            color: theme('colors.primary.900'),
        },

        // colors: danger
        '.alert-danger, .alert-error': {
            color: theme('colors.red.900'),
            borderColor: theme('colors.red.200'),
            backgroundColor: theme('colors.red.100'),
        },
        '.alert-danger header::before, .alert-error header::before, .alert-danger .alert-heading::before, .alert-error .alert-heading::before': {
            backgroundImage: `url("data:image/svg+xml,%0A%3Csvg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.25709 1.0991C7.02209 -0.260898 8.97909 -0.260898 9.74309 1.0991L15.3231 11.0191C16.0731 12.3531 15.1101 13.9991 13.5811 13.9991H2.42009C0.890093 13.9991 -0.0729075 12.3531 0.677092 11.0191L6.25709 1.0991ZM9.00009 11.0001C9.00009 11.2653 8.89474 11.5197 8.7072 11.7072C8.51966 11.8947 8.26531 12.0001 8.00009 12.0001C7.73488 12.0001 7.48052 11.8947 7.29299 11.7072C7.10545 11.5197 7.00009 11.2653 7.00009 11.0001C7.00009 10.7349 7.10545 10.4805 7.29299 10.293C7.48052 10.1055 7.73488 10.0001 8.00009 10.0001C8.26531 10.0001 8.51966 10.1055 8.7072 10.293C8.89474 10.4805 9.00009 10.7349 9.00009 11.0001ZM8.00009 3.0001C7.73488 3.0001 7.48052 3.10546 7.29299 3.29299C7.10545 3.48053 7.00009 3.73488 7.00009 4.0001V7.0001C7.00009 7.26532 7.10545 7.51967 7.29299 7.70721C7.48052 7.89474 7.73488 8.0001 8.00009 8.0001C8.26531 8.0001 8.51966 7.89474 8.7072 7.70721C8.89474 7.51967 9.00009 7.26532 9.00009 7.0001V4.0001C9.00009 3.73488 8.89474 3.48053 8.7072 3.29299C8.51966 3.10546 8.26531 3.0001 8.00009 3.0001Z' fill='%23F76659'/%3E%3C/svg%3E%0A")`,
        },
        '.alert-danger .close': {
            color: theme('colors.red.500'),
        },

        // colors: success
        '.alert-success': {
            color: theme('colors.green.900'),
            borderColor: theme('colors.green.200'),
            backgroundColor: theme('colors.green.100'),
        },
        '.alert-success header::before, .alert-success .alert-heading::before': {
            backgroundImage: `url("data:image/svg+xml,%0A%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z' fill='%2347D16C'/%3E%3C/svg%3E%0A")`,
        },

        // colors: warning
        '.alert-warning': {
            color: theme('colors.yellow.900'),
            borderColor: theme('colors.yellow.300'),
            backgroundColor: theme('colors.yellow.100'),
        },
        '.alert-warning header::before, .alert-warning .alert-heading::before': {
            backgroundImage: `url("data:image/svg+xml,%0A%3Csvg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.25709 1.0991C7.02209 -0.260898 8.97909 -0.260898 9.74309 1.0991L15.3231 11.0191C16.0731 12.3531 15.1101 13.9991 13.5811 13.9991H2.42009C0.890093 13.9991 -0.0729075 12.3531 0.677092 11.0191L6.25709 1.0991ZM9.00009 11.0001C9.00009 11.2653 8.89474 11.5197 8.7072 11.7072C8.51966 11.8947 8.26531 12.0001 8.00009 12.0001C7.73488 12.0001 7.48052 11.8947 7.29299 11.7072C7.10545 11.5197 7.00009 11.2653 7.00009 11.0001C7.00009 10.7349 7.10545 10.4805 7.29299 10.293C7.48052 10.1055 7.73488 10.0001 8.00009 10.0001C8.26531 10.0001 8.51966 10.1055 8.7072 10.293C8.89474 10.4805 9.00009 10.7349 9.00009 11.0001ZM8.00009 3.0001C7.73488 3.0001 7.48052 3.10546 7.29299 3.29299C7.10545 3.48053 7.00009 3.73488 7.00009 4.0001V7.0001C7.00009 7.26532 7.10545 7.51967 7.29299 7.70721C7.48052 7.89474 7.73488 8.0001 8.00009 8.0001C8.26531 8.0001 8.51966 7.89474 8.7072 7.70721C8.89474 7.51967 9.00009 7.26532 9.00009 7.0001V4.0001C9.00009 3.73488 8.89474 3.48053 8.7072 3.29299C8.51966 3.10546 8.26531 3.0001 8.00009 3.0001Z' fill='%23F8C51B'/%3E%3C/svg%3E%0A")`,
        },
    });
});
