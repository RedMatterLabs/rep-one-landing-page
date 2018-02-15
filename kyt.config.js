// Base kyt config.
// Edit these properties to make changes.

module.exports = {
    reactHotLoader: true,
    debug: false,
    modifyWebpackConfig: (baseConfig, options) => {
        baseConfig.resolve.alias = {
            'src': require('path').resolve(process.cwd(), './src'),
        }
        return baseConfig;
    }
};
