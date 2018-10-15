module.exports = {
  name: '外联平台',
  prefix: 'YQ',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/orgine/iconfont.css',
  iconFontJS: '/public/orgine/iconfont.js',
  openPages: ['/login'],                                       //未登陆时可进入的开放页
  defaultPage: '/powermop-api-manager-web-product-overview',   //登陆成功后进入的默认页
  namespacePrefix: `powermop_api_manager_web`,                 //model命名空间前缀
  helpLink: `https://www.zhihu.com/question/19581624`,         //帮助中心地址
  apiPrefix: `/mockAPI`,
  // 代理字段
  call: {
    self: `call/self`,
  },
  isCiphertext: true,            //是否密文请求
  ENV: "dev",                    //当前环境 dev开发 test测试 prod生产
}
