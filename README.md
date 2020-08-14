> 记录学习 webpack 的过程

- `2020-08-12` webpack4

## 1. webpack 基础知识
### 1.1 前言
webpack 是一个模块打包工具，将多个模块打包到生成一个最终的 bundle.js 问题.在前端工程化中有着非常大的作用。

webpack 需要掌握的核心概念：
- `Entry` 开始构建的入口模块
- `Output` 输出，如何命名输出文件，以及输出目录
- `Loaders` 解析文件。非 js 文件 webpack 是无法直接解析的，需要使用对应的 loader 来处理文件
- `Plugins` 更多的是优化，提取精华(公共模块去重)，压缩处理(css/js/html)等，对webpack功能的扩展
- `Chunk`

### 1.2 安装
首先要有 node 和 npm 

然后初始化项目 npm init 生成 package.json， 这个文件记录了你项目的描述，重要的是记录了 node 包的信息，版本

接下来安装 webpack，不建议全局安装 webpack。因为当你维护老项目或者跑其他人项目时，他们用的 webpack 版本很可能跟你的webpack 版本是不同的，3.x 和 4.x 就会运行不起来。

所以 webpack 建议单独项目局部安装 `npm install webpack webpack-cli -D`

安装完成你会发现（没有全局 webpack），运行 webpack -v 报错。因为这是全局查找 webpack 版本

查看 webpack 版本用 `npx webpack -v`   npx 相当于 npm 的命令行工具

查看安装的包的信息用 `npm info webpack`

### 1.3 webpack 配置文件
webpack.config.js 就是 webpack 的默认配置文件，我们可以自定义配置文件

在命令行中运行npx webpack，就会去找webpack.config.js文件中的配置信息

默认的配置文件必须是 webpack.config.js 这个名称，但是你自己写了一个 webpack 配置文件信息，那行不行呢？当然是可以的，那你得运行以下命令

> npx webpack --config webpack.config.js
> // --config 后面就是你自己配置的webpack文件信息

### 1.4 npm scripts
经常跑项目都是 npm run dev，这是怎么配置的呢？

我们只需要在package.json文件中配置scripts命令就行
```js
"scripts": {
  "dev": "webpack --config webpack.config.js"
},
```
这个时候，你在运行 npm run dev，它会被翻译成对于的指令，也会打包对应的文件

**webpack 打包的三个命令**
- webpack index.js （全局安装了）
- npx webpack index.js
- npm run dev

### 1.5 webpack-cli
不下载这个包的话，你在命令行运行 webpac k指令是不生效的，也就是说，webpack-cli 作用就是可以在命令行运行 webpack 命令并且生效。

### 1.6 webpack 配置环境
主要分为 development 和 production 两种环境，默认情况下是production环境，两者的区别就是，后者会对打包后的文件压缩。

```js
modules.exports = {
  mode: 'development',
  ...
}
```


## 2. webpack 核心概念 loader
### 2.1 what is loader!
loader 就是一个打包方案，它知道对于某些特定文件应该如何去打包。

webpack 默认知道如何打包 js 文件的，但是其他文件模块，webpack 就不知道如何打包了，loader 知道怎么处理，所以 webpack 就会去求助于loader。
- 遇到非 js 结尾的模块，webpack 回去 module 中找相应的规则，匹配到了对应的规则，再去求助于对应的 loader
- 对应的 laoder 就会将该模块打包到配置的目录下，每个 loader 都可单独配置打包地址。
- 打包返回的是该模块的路径。


### 2.2 常用 loader
- file-loader
- url-loader
- css-loader | style-loader
- sass-loader
- postcss-loader


各种 loader 的具体看这 [webpack核心概念loader](https://juejin.im/post/6859888538004783118#heading-10)
















## 参考文章
https://juejin.im/post/6859888538004783118



