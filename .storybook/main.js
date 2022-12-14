module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../stories/**/*.stories.mdx', 
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        // '@storybook/addon-docs',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        'storybook-addon-pseudo-states',
        '@storybook/addon-cssresources',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/html',
};
