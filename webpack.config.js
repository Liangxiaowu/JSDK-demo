var path = require('path');
var config = {
    // 环境  production(生产)、development(开发)、none
    mode: 'production',
    // 入口文件
    entry: [
        path.resolve(__dirname, './index.js')
    ],

    output: {
        path: path.join(__dirname, './dist'), // 输出位置文件
        publicPath: '/dist/',
        filename: 'bundle.js' // 输出文件
    }
}
module.exports = config;