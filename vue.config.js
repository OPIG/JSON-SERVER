
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
const port = process.env.port || 8888

//  const pkg = require('./package.json')
//  const banner = `
//   ${pkg.name}
//   ${pkg.description}\n
//   @version v${pkg.version}
//   @homepage ${pkg.homepage}
//   @reponsitory ${pkg.reponsitory.url}\n
//   (c) 2020 Atom Yuan Released
//   hash: [hash]
//  `

module.exports = {
  // entry: `${__dirname}/index.js`,
  // devtool: 'cheap-module-source-map',
  // output: {
  //   path: `${__dirname}/dist`, // 定义输出的目录
  //   filename: 'micro-schema-validator.min.js', // 定义输出文件名
  //   library: 'MicroschemaValidator', // 定义暴露到浏览器环境的全局变量名称
  //   librarayTarget: 'umd' // 指定遵循的模块化规范
  // },
  // plugins: [
  //   new webpack.BannerPlugin(banner) // 输出项目信息
  // ],
  // publicPath: '', // 打包资源的前缀路径
  // filenameHashing: true, // 文件名是否添加后缀hash
  // runtimeCompiler: true, // runtime+complie
  // productionSourceMap: true,
  // configureWebpack: config => {
  //   config.plugins.push(new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify(NODE_ENV)
  //     }
  //   }
  //   ))
  // },
  devServer: {
    port: port,
    // open: true, // 启动项目是打开浏览器
    proxy: {
      '/rest/': {
        target: 'http://127.0.0.1:3004',
        changeOrigin: true,
        pathRewrite: {
          '^/rest/': '/'
        }
      }
    }
  }
}
