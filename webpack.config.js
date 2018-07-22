//载入处理路径地址的模块
var path = require('path')

//引入html-webpack-plugin模块包
var htmlWebpackPlugin = require('html-webpack-plugin')

//向外暴露配置对象
module.exports = {
    //入口文件
    entry: path.join(__dirname, './src/main.js'),

    //指定输出的选项
    output: {
        //输出路径
        path: path.join(__dirname, './dist'),

        //指定输出文件的名称
        filename: 'bundle.js'
    },
    //所有webpack 插件配置节点
    plugins: [
        new htmlWebpackPlugin ({
            //指定模板文件的路径
            template: path.join(__dirname, './src/index.html'),
            //设置生成的内容页面的名称
            filename: 'index.html'
        })
    ],
    module: {
        //第三方模块的匹配规则
        rules: [
            //处理css文件的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理scss文件的loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            //处理图片路径的loader
            { test: /\.(jpg|jpeg|png|gif|bmg)$/, use: 'url-loader?limit=45975&name=[hash:8]-[name].[exit]' },
            //处理字体文件的loader
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            //配置ES6高级语法转低级语法的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            //处理.vue文件的loader
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    //webpack警告禁止 建议hints在开发模式下禁用，但在生产模式下启用
    performance: {
        hints: false
    },
}