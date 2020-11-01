module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  configureWebpack: config => {
  },
  devServer: {
    // 配置代理
    open: true, // auto open brower 项目启动后自动打开浏览器...
    host: "localhost",
    port: 8015, // 修改端口号
    proxy: {
      '/tianapi': {
        ws: true,   // 禁用websocket
        target: 'http://api.tianapi.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/tianapi': ''
        }
      }
    }
  },
}
