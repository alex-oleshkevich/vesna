module.exports = {
    ring(color, offset = '2px') {
        return {
            '--tw-ring-offset-color': color,
            '--tw-ring-offset-width': offset,
            '--tw-ring-opacity': 1,
            '--tw-ring-color': 'rgb(147 197 253/var(--tw-ring-opacity))',
            '--tw-ring-offset-shadow':
                'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
            '--tw-ring-shadow':
                'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            boxShadow: 'var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)',
        };
    },
};
