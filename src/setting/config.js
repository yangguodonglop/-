const apiPrefix = '/mockAPI'

module.exports = {
  name: '外联平台',
  prefix: 'YQ',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/orgine/iconfont.css',
  iconFontJS: '/public/orgine/iconfont.js',
  openPages: ['/login'],        //未登陆成功时可进入的开放页
  defaultPage: '/powermop-permit-manager-web-organization/organization-manager',     //登陆成功后进入的默认页
  namespacePrefix: `powermop-permit-manager-web`,          //model命名空间前缀
  apiPrefix,
  // 代理字段
  call: {
    self: `call/self`,
  },
  isCiphertext: false,            //是否密文请求
  ENV: "dev",                    //当前环境 dev开发 test测试 prod生产
}