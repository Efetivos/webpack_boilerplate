# WEBPACK CONFIG 
> boilerplate

## Commands Webpack
> Watch Files
```bash
    webpack ./src/app.js --watch
```
## WEBPACK.CONFIG.JS 
> webpack.congif.js
```bash
    module.exports = {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, '/dist'),
            filename: 'app.bundle.js'
        },
    }

```




### 1. Instance package.json
```bash
    npm init
```

### 2. Install Webpack & Webpack-cli
```bash
    npm i -g webpack //global
    npm i -D webpack //local
    npm i -D webpack@2.2.0 //install specificly version
    npm i -D webpack-cli
```

### Fix Error from Minify teser
Instal: npm i -D terser-webpack-plugin
Mudar parametro no Arquivo: \node_modules\terser-webpack-plugin\dist
```bash
    _terser.default.minify para _terser.minify
```


### 3. Create src & dist folder
```bash
.
├── .vscode
├── dist
├── node_modules
├── src
│   ├── app.js
|
├── package.json
├── package-lock
├── README.md
├── webpack.config.js

```

### 4. Create app.js & into src folder

### 5. Create webpack.config.js

### 6. Create command on dev on package.json
```bash
    "scripts": {
        "dev": "webpack -d --watch"
    },
```

### 6. Create index.html on src

### 7. Install html-webpack-plugin
```bash
    //instal
    npm i -D html-webpack-plugin

    //instance
    var HtmlWebpackPlugin = require('html-webpack-plugin');

    //on plugins
        plugins: [
        new HtmlWebpackPlugin({
            title: 'Page Home',
            filename: 'index.html',
            template: './src/index.html'
            minify: {
                collapseWhitespace: true
            },
        })
    ]
```

### 8. Install ExtractTextPlugin
```bash
    //instal
    npm i -D extract-text-webpack-plugin@next

    //instance
    var ExtractTextPlugin = require('extract-text-webpack-plugin')

    //on Module
    module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
            ]
    }

    //on plugins
    plugins: [
        new ExtractTextPlugin({ //important: use: npm i -D extract-text-webpack-plugin@next
            filename: 'app.css'
        })
    ]
```

### 8. Install Stylesing Loaders & create Style
```bash
    //instal
    npm i -D style-loader css-loader node-sass sass-loader 


    //on Module
    module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
            ]
    }
```
#### 8.1 instance css on app.js
```bash
    const css = require('./app.sass');
```


### 9. Install Webpack Dev Server
```bash
    //instal
    npm i -D webpack-dev-server 

    //comand alias on package.json
    "dev": "webpack-dev-server"


    // instance
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        //port: 9000,
        stats: 'errors-only',
        open: true
    }

    
```
### 8. INSTALL BABEL
```bash
    //instal
    npm i -D babel-loader @babel/core @babel/preset-env webpack

    //on Module
    module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
            ]
    }
```


### 9. Install Pug e Pugloader
```bash
    //instal
    npm i -D pug pug-loader


    //dymanic title
    title= htmlWebpackPlugin.options.title


    module: {
        rules: [

            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
        ]
    }
```


### 10. Install WriteFilePlugin
```bash
    //instal
    npm i -D write-file-webpack-plugin

    //dymanic title
    title= htmlWebpackPlugin.options.title

    //instance
    const WriteFilePlugin = require('write-file-webpack-plugin');


    //on plugins
    plugins: [
        new WriteFilePlugin(),
        })
    ]
```


### 10. Install File Loader
```bash
    //instal
    npm i -D file-loader image-webpack-loader


    module: {
        rules: [
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
            }
        ]
    }
```


## 11. IMPORT LIBRARIES
> jQuery
```bash
    //install 
    npm install --save-dev jquery

    //instance
    const webpack = require('webpack')

    //on plugins
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
    ]

```

> GSAP
```bash
    //install 
    npm install --save-dev gsap

    //ON APP JS
    import { TweenMax } from 'gsap'
    import scrollToPlugin from 'gsap/scrollToPlugin'
```

> ScrollMagic
```bash
    //install 
    npm install --save-dev scrollmagic

    //ON APP JS
    import ScrollMagic from 'scrollmagic'
    import 'ScrollMagicGSAP'

    //ON MODULE
    module: {
        rules: [
            {
                 test: /\.js$/,
                 loader: "imports-loader?define=>false"
            }
        ]
    }

    //ON RESOLVE
    resolve: {
        alias: { //Seção Alias
            "ScrollMagicGSAP": "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
        }
    }


```