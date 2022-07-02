const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'build')
};

const getPlugins = ({production}) => {
    return [
        production ?
            new CopyPlugin({
                patterns: [
                    {
                        from: PATHS.src + "/templates/index.html",
                    },
                ],
            }) :
            new HtmlWebpackPlugin({
                template: `${PATHS.src}/index.html`,
                filename: 'index.html',
                inject: true,
                hash: true,
                chunks: ['main'],
                meta: {
                    charset: 'UTF-8',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                }
            })
,
    new HtmlWebpackPlugin({
            template: `${PATHS.src}/404.html`,
            filename: '404.html',
            inject: true,
            hash: true,
            chunks: ['main'],
            meta: {
                charset: 'UTF-8',
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            production
        })
    ];
};
const WEBPACK_MODES = {
    development: 'development',
    production: 'production'
};

module.exports = (env, { mode }) => {
    const production = mode === WEBPACK_MODES.production;
    const devtool = mode === WEBPACK_MODES.development
        ? 'source-map'
        : void 0;

    return {
        mode,
        devtool,
        entry: {
            main: './src/main.tsx',
        },
        output: {
            path: PATHS.dist,
            filename: '[name].[hash].js',
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },

                {
                    test: /\.tsx$/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ],
                    exclude: /node_modules/
                },
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    node_vendors: {
                        test: /node_modules/,
                        name: 'node_vendors',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        devServer: {
            contentBase: './',
            compress: true,
            port: 8080,
            open: false,
            writeToDisk: true
        },
        plugins: getPlugins({production})
    };
};