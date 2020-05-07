const autoprefixer = require('autoprefixer');
const doiuse = require('doiuse');
const cssReset = require('postcss-css-reset');

module.exports = {
    plugins: [
        autoprefixer({overrideBrowserslist: ['last 2 versions']}),
        doiuse({
            browsers: ['ie >= 11', 'last 2 Chrome versions', 'last 2 Firefox versions'],
            ignore: ['flexbox', 'outline'],
            onFeatureUsage: (val) => {
                throw new Error(`You are using not supported CSS by all specified browsers. ${val.message}`);
            }
        }),
        cssReset({})
    ]
};
