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
            transparent: 'rgba(0, 0, 0, 0))',
            inherit: 'inherit',
            ring: 'rgb(49 132 253 / 50%)',

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
                'Inter var',
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
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('./variables'),
        require('./common'),
        require('./typography'),
        require('./buttons'),
        require('./close'),
    ],
};
