const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        config: {path: 'postcss.config.js'},
        sourceMap: 'inline'
    }
};

export default {
    rulesConfig: [
        {
            enforce: 'pre',
            test: /\.ts$/,
            exclude: /node_modules/,
            loader:'tslint-loader'
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        },
        {
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {cache: true},
            test: /\.js$/
        },
        {test: /\.css$/, use: ['style-loader', 'css-loader', postCssLoader]},
        {
            test: /\.less$/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        localsConvention: 'camelCase',
                        modules: {
                            localIdentName: '[name]__[local]',
                            mode: 'local'
                        }
                    }
                }, postCssLoader, 'less-loader?sourceMap']
        },
        {loader: 'url-loader', test: /\.(png|svg|jpg|woff|woff2|eot|ttf|otf)/}
    ],
    resolve: {
        extensions: ['.ts', '.js', '.less']
    }
};
