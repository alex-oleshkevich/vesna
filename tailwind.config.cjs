module.exports = {
    content: [
        './stories/**/*.{html,js,ts}',
        './src/**/*.{html,js,ts}'
    ],
    presets: [require('./src/preset.cjs')],
};
