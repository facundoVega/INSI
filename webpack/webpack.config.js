const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: './src/app.js',
    

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,
                use:
                    [
                        miniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]

            },
            {
                test: /\.(jpg|png|gif)$/,
                use:
                    [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './static',
                                useRelativePath: true


                            }


                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: '60-95',
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                // webp: {
                                //     quality: 75
                                // }
                            }
                        }

                    ]


            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:
        [
            new htmlWebPackPlugin({
                template: './src/index.hbs',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                }
            }),

            new miniCssExtractPlugin({
                filename: 'main.css'
            })



        ]

};

