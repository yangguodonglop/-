import mockjs from 'mockjs'
const { config } = require('./common')
const { apiPrefix } = config
// let database = mockjs.mock([
//   {
//     id: '3_1_0',
//     mpid: '3_1',
//     name: 'demo模块',
//     link_type: '1',
//     link_to: '/demo/statecode',
//   },
//   {
//     id: '3_1_1',
//     mpid: '3_1',
//     name: '产品概况',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-product-overview',
//   },
//   {
//     id: '3_1_2',
//     mpid: '3_1',
//     name: '服务概况',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-service-overview',
//   },
//   {
//     id: '3_1_3',
//     mpid: '3_1',
//     name: 'API开发',
//   },
//   {
//     id: '3_1_3_1',
//     mpid: '3_1_3',
//     name: 'API接口',
//     icon: 'setting',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-develop',
//   },
//   {
//     id: '3_1_3_2',
//     mpid: '3_1_3',
//     name: '开发包',
//     icon: 'setting',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-develop',
//   },
//   {
//     id: '3_1_4',
//     mpid: '3_1',
//     name: 'API监控',
//   },
//   {
//     id: '3_1_4_1',
//     mpid: '3_1_4',
//     name: '服务功能',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-monitor',
//   },
//   {
//     id: '3_1_4_2',
//     mpid: '3_1_4',
//     name: '服务渠道',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-monitor',
//   },
//   {
//     id: '3_1_4_3',
//     mpid: '3_1_4',
//     name: '服务机构',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-monitor',
//   },
//   {
//     id: '3_1_5',
//     mpid: '3_1',
//     name: 'API网关',
//     icon: 'setting',
//   },
//   {
//     id: '3_1_5_1',
//     mpid: '3_1_5',
//     name: '网关配置',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-gateway',
//   },
//   {
//     id: '3_1_5_2',
//     mpid: '3_1_5',
//     name: '鉴权配置',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-gateway',
//   },


//   {
//     id: '3_2_1',
//     mpid: '3_2',
//     name: '总览',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-platform-overview',
//   },
//   {
//     id: '3_2_2',
//     mpid: '3_2',
//     name: '服务网关',
//   },
//   {
//     id: '3_2_2_1',
//     mpid: '3_2_2',
//     name: '全局鉴权配置',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-service-gateway',
//   },
//   {
//     id: '3_2_2_2',
//     mpid: '3_2_2',
//     name: '异常日志',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-service-gateway',
//   },
//   {
//     id: '3_2_2_3',
//     mpid: '3_2_2',
//     name: '请求异常',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-service-gateway',
//   },
//   {
//     id: '3_2_2_4',
//     mpid: '3_2_2',
//     name: '服务总线',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-service-gateway',
//   },
//   {
//     id: '3_2_2_5',
//     mpid: '3_2_2',
//     name: '状态码',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-service-gateway/statecode',
//   },
//   {
//     id: '3_2_3',
//     mpid: '3_2',
//     name: '基础数据',
//   },
//   {
//     id: '3_2_3_1',
//     mpid: '3_2_3',
//     name: '应用服务信息',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-basic-data',
//   },
//   {
//     id: '3_2_3_2',
//     mpid: '3_2_3',
//     name: '企业服务信息',
//     link_type: '1',
//     link_to: '/powermop-api-manager-web-basic-data',
//   },
// ])
let database = mockjs.mock([
 
    {
    id: '4_1_1',
    mpid: '4_1',
    name: '用户施伟',
    link_type: '1',
    link_to: '/powermop-app-manager-web-platform-products/products-manager',
  },
  {
    id: '4_1_2',
    mpid: '4_1',
    name: '组织结构',
    link_type: '1',
    link_to: '/powermop-permit-manager-web-organization/organization-manager',
  },
  {
    id: '4_2_5',
    mpid: '4_1',
    name: '用户',
    link_type: '1',
    link_to: '/powermop-permit-manager-web-user/user-manager',
  },
  // {
  //   id: '4_2_3',
  //   mpid: '4_1',
  //   name: '数据对象',
  //   link_type: '1',
  //   link_to: '/powermop-permit-manager-web-user/user-manager',
  // },
  // {
  //   id: '4_2_4',
  //   mpid: '4_1',
  //   name: '数据权限',
  //   link_type: '1',
  //   link_to: '/powermop-permit-manager-web-user/user-demo',
  // },

  
])
module.exports = {
  [`GET ${apiPrefix}/prodmenus`] (req, res) {
    res.status(200).json(database)
  },
}
