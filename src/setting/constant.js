import permitConfig from '../pages/powermop-permit-manager-web-organization/constant'


export default {
  // 请求报文head配置
  head: {
    version: "1.0",
    encrypt_type: "AES", 
  },
  // 内页路由
  routes: [
    ...(permitConfig.routes),   //我的应用
  ],
}
