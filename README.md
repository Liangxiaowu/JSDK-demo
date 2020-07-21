# webpack打包JSDK
#### 1.说明
本代码是为了方便`js`的打包，只适合学习使用。如有正式开发或生产使用，建议规划SDK的文档、示例代码、以及开发规范。
#### 2.当前使用环境
- node : v12.16.3
- webpack : 4.43.0
- webpack-cli : 3.3.12

#### 3.打包方式
```npm
    npm run build
```
#### 4.开发 

日常开发只需要在`lib`文件创建相关的`js`文件,通过`export`输出相对应的变量，需要对外开放的函数在`index.js`通过`import`来加载模块方法。参考`lib\test.js`
    
#### 5.使用
执行`步骤3`之后会在更目录下面生成一个`dist`文件夹，直接在你所开发的`html`或者`js`文件下引入即可使用。参考`test.html`
#### 6.更新
 - 2020-07-21 : 打包JSDK

#### 总结
关于import和export参考 : [ES6 模块](https://www.runoob.com/w3cnote/es6-module.html)