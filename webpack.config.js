module.exports = {
    // devtool: 'source-map',
    devtool: 'cheap-module-source-map',
    // devtool: 'eval-source-map',
    // devtool: 'cheap-module-eval-source-map',
    entry: __dirname + "/app/main.js",   //the only main file
    output: {
        path: __dirname + "/public",     //where the files output
        filename: 'bundle.js'            //the file name of output
    }
};

//__dirname is the default param , the currently folder path