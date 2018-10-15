import { resolve } from 'path';

export default {
  theme: "./theme.config.js",
  // 接口代理示例
  proxy: {
    // 请求自己 接口
    "/call/self": {                           //自定义路径字段
      "target": "http://localhost:8000",      //要代理的接口及端口号
      "changeOrigin": true,
      "pathRewrite": { "^/call/self" : "" }   //路径重写
    },
  },
  alias: {
    themes: resolve(__dirname, './src/themes'),
    components: resolve(__dirname,"./src/components"),
    utils: resolve(__dirname,"./src/utils"),
    setting: resolve(__dirname,"./src/setting"),
    config: resolve(__dirname,"./src/setting/config"),
    services: resolve(__dirname,"./src/layouts/services"),
    models: resolve(__dirname,"./src/layouts/models"),
    routes: resolve(__dirname,"./src/routes"),
  },
  urlLoaderExcludes: [
    /\.svg$/,
  ],
  ignoreMomentLocale: true,
}
