var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",   //the only main file
    output: {
        path: __dirname + "/build",     //where the files output
        filename: 'bundle.js'           //the file name of output
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
        },
        { 
            test: /\.css$/, loader: "style!css?modules!postcss" }
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