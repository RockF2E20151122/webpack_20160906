var path = require("path");

module.exports = {
    // devtool: 'source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'eval-source-map',
    // devtool: 'cheap-module-eval-source-map',
    entry: __dirname + "/app/main.js",   //the only main file
    output: {
        // path: __dirname + "/public",     //where the files output
        path: path.resolve(__dirname, "public"),
        
        filename: 'bundle.js',           //the file name of output
        
        publicPath: "/assets/"
    },
    devServer: {//local server config
        contentBase: "./public",    //local server static folder
        color: true,    //terminal output has color
        historyApiFallback: true,   //no jump page
        inline: true            //real time refresh
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
        }]
    }
};

//__dirname is the default param , the currently folder path
