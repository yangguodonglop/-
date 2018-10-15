import Demo from '../pages/demo/constant'

export default {
  // 请求报文head配置
  head: {
    version: "1.0",
    encrypt_type: "AES", 
  },
  // 内页路由
  routes: [
    ...(Demo.routes),
  ],
}