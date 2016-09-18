var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// console.info(webpack);

module.exports = {
    // devtool: 'source-map',
    // devtool: 'cheap-module-source-map',
    devtool: 'eval-source-map',
    // devtool: 'cheap-module-eval-source-map',
    entry: __dirname + "/app/main.js",   //the only main file
    output: {
        path: __dirname + "/build",     //where the files output
        // path: path.resolve(__dirname, "public"),
        filename: 'bundle.js',           //the file name of output
        
        publicPath: "/assets/"
    },
    devServer: {//local server config
        contentBase: "./build",    //local server static folder
        color: true,    //terminal output has color
        historyApiFallback: true,   //no jump page
        inline: true            //real time refresh, already can auto refresh react modules
        
        ,hot: true              //config to hot and add the "query" for babel make the react auto packaging
    },
    module: {
        loaders: [{//loader for json file
            test: /\.json$/,
            loader: "json"
        },
        {//loader for babel
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'//config inside webpack module
            ,query:{
                //config to hot and add the "query" for babel make the react auto packaging
                presets: [ 'es2015', 'react' ],
                "env": {
                    "development": {
                        "plugins": [["react-transform", {
                            "transforms": [{
                                "transform": "react-transform-hmr",
                                "imports": ["react"],
                                "locals": ["module"]
                            }]
                        } ]]
                    }
                }
            }
        },
        // {//loader for css
            // //npm install style-loader css-loader --save-dev
        // },
        { test: /\.css$/, loader: "style!css?modules!postcss" }
            // => "style" and "css" loader is used for ".css" files
            // Alternative syntax:
            // { test: /\.css$/, loaders: ["style", "css"] }
        ]
    },
    postcss:[ require('autoprefixer')], //using autoprefixer plugin
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

//__dirname is the default param , the currently folder path
