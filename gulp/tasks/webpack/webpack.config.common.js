import LessHintPlugin from 'lesshint-webpack-plugin';
import paths from '../../utils/paths';

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        config: {path: 'postcss.config.js'},
        sourceMap: 'inline'
    }
};

export default {
    plugins: [
        new LessHintPlugin({files: [`${paths.srcDir}/**/*.less`]})
    ],
    rulesConfig: [
        {
            enforce: 'pre',
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'tslint-loader'
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
        {loader: 'url-loader', test: /\.(svg|woff|woff2|eot|ttf|otf)/}
    ],
    resolve: {
        extensions: ['.ts', '.js', '.less']
    }
};
