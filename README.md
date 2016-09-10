# webpack_20160906

basic comments of shell:
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

loader - config:
1. npm:
    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
    cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
    npm install --save react react-dom
    
2. npm 