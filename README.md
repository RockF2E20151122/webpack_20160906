# webpack_20160906

basic shell:
    webpack app/main.js  public/bundle.js

    webpack
    node_modules/.bin/webpack
    
    
the shell after config steps 02:
//注：package.json中的脚本部分已经默认在命令前添加了node_modules/.bin路径，
//所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了
    npm start 
    npm run build
    
notice: git merge --squash develop
--squash 选项的含义是：
//本地文件内容与不使用该选项的合并结果相同，但是不提交、不移动HEAD，因此需要一条额外的commit命令。
//其效果相当于将another分支上的多个commit合并成一个，放在当前分支上，原来的commit历史则没有拿过来。

0. debugging on local server:
http://webpack.github.io/docs/webpack-dev-server.html
    ->
    output: {
        // path: __dirname + "/public",     //where the files output
        path: path.resolve(__dirname, "public"),
        
        filename: 'bundle.js',           //the file name of output
        
        publicPath: "/assets/"  //this means: 'http://localhost:8080/assets/' is the default url
    },
    -> add some tag to index.html
    <script src="./../node_modules/react/dist/react-with-addons.js"></script>
    <script src="http://localhost:8080/assets/node_modules/webpack-dev-server/bin/webpack-dev-server.js"></script>
    
    -> change the bundle.js file under this folder:
    <script src="http://localhost:8080/assets/bundle.js" type="text/javascript"></script>
    
    -> then after npm start:
    LM-SHC-16501205:webpack_20160906 dihwang$ webpack-dev-server --progress --colors
</body>

loader - config:
1. npm:
    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
    cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
    npm install --save react react-dom
    
2. npm 