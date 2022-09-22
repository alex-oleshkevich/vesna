const colors = require('./colors');

function hexToChannels(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
}

function withOpacityValue(channels) {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `rgb(${channels})`;
        }
        return `rgb(${channels} / ${opacityValue})`;
    };
}

function colorToChannels(colors) {
    return Object.fromEntries(
        Object.entries(colors).map(([shade, color]) => [shade, withOpacityValue(hexToChannels(color))]),
    );
}

module.exports = {
    theme: {
        colors: {
            base: colors.darkGray[900],
            muted: colors.darkGray[500],
            link: colors.primary[600],
            white: 'white',
            black: 'black',
            transparent: 'rgba(0, 0, 0, 0))',
            inherit: 'inherit',
            ring: 'rgb(49 132 253 / 25%)',

            'dark-gray': colorToChannels(colors.darkGray),
            'mid-gray': colorToChannels(colors.midGray),
            'light-gray': colorToChannels(colors.lightGray),
            primary: colorToChannels(colors.primary),
            red: colorToChannels(colors.red),
            green: colorToChannels(colors.green),
            yellow: colorToChannels(colors.yellow),
            purple: colorToChannels(colors.purple),
            teal: colorToChannels(colors.teal),
            gray: {
                900: withOpacityValue(hexToChannels(colors.darkGray['900'])),
                800: withOpacityValue(hexToChannels(colors.darkGray['700'])),
                700: withOpacityValue(hexToChannels(colors.darkGray['500'])),
                600: withOpacityValue(hexToChannels(colors.midGray['900'])),
                500: withOpacityValue(hexToChannels(colors.midGray['800'])),
                400: withOpacityValue(hexToChannels(colors.midGray['700'])),
                300: withOpacityValue(hexToChannels(colors.midGray['500'])),
                200: withOpacityValue(hexToChannels(colors.lightGray['800'])),
                100: withOpacityValue(hexToChannels(colors.lightGray['600'])),
                50: withOpacityValue(hexToChannels(colors.lightGray['500'])),
            },
        },
        fontFamily: {
            sans: [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ].join(', '),
            roboto: 'Roboto',
            nunito: 'Nunito',
            mono: [
                'Roboto Mono',
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ].join(', '),
        },
        boxShadow: {
            sm: 'var(--shadow-sm)',
            DEFAULT: 'var(--shadow-base)',
            md: 'var(--shadow-md)',
            lg: 'var(--shadow-lg)',
            xl: 'var(--shadow-xl)',
            '2xl': 'var(--shadow-2xl)',
        },
        extend: {
            fontSize: {
                sm: '0.75rem', // 12px
                base: '0.875rem', // 14px
                md: '0.875rem', // 14px
                lg: '1rem', // 16px
                xl: '1.125rem', // 18px
                '2xl': '1.5rem', // 24px
                '3xl': '2rem', // 32px
                '4xl': '2.25rem', // 36px
                '5xl': '2.5rem', // 40px
                '6xl': '3rem', // 48px
                '7xl': '3.5rem', // 56px
                '8xl': '4rem', // 64px
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('./variables'),
        require('./common'),
        require('./typography'),

        // core
        require('./close'),
        require('./buttons'),
        require('./tables'),
        require('./dots'),
        require('./status'),
        require('./badges'),
        require('./counter'),
        require('./progressbar'),
        require('./dropdown_menu'),
        require('./tabs'),
        require('./form_inputs'),
        require('./dividers'),
        require('./pagination'),
        require('./avatars'),
        require('./file_upload'),
        require('./spinner'),
        require('./dropzone'),
        require('./breadcrumbs'),

        // composite
        require('./empty_state'),
        require('./calendar'),
        require('./alerts'),
        require('./modals'),
        require('./datepicker'),

        // app
        require('./app_shell/sidebar'),
    ],
};
