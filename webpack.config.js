const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    //mode: 'production', //most important
    mode: 'development', //most important
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },


    // ------------------  RULES
    // ------------------  RULES
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },

            //{
            //    test: /\.m?js$/,
            //    exclude: /(node_modules|bower_components)/,
            //    use: {
            //        loader: 'babel-loader',
            //        options: {
            //            presets: ['@babel/preset-env']
            //        }
            //    }
            //},

            {
                test: /\.pug$/,
                use: 'pug-loader'
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },

            {
                test: /\.js$/,
                loader: "imports-loader?define=>false"
            }

        ]
    },

    // ------------------  DEV SERVER
    // ------------------  DEV SERVER
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        stats: 'errors-only',
        open: true
    },




    // ------------------  PLUGINS
    // ------------------  PLUGINS
    plugins: [
        new HtmlWebpackPlugin({
            title: 'INDEX PAGE',
            filename: 'index.html',
            template: './src/index.pug'
        }),
        //new HtmlWebpackPlugin({
        //    title: 'CONTACT PAGE',
        //    filename: 'contact.html',
        //    template: './src/contact.pug'
        //}),
        new ExtractTextPlugin({ //important: use: npm i -D extract-text-webpack-plugin@next
            filename: 'app.css',
        }),
        new WriteFilePlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },



    resolve: {
        alias: { //Seção Alias
            "ScrollMagicGSAP": "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
        }
    }
} //close module exports