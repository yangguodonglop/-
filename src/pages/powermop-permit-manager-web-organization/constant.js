//import { config } from 'setting'
const { ENV } = 'config'

const moduleRoute = `/powermop-permit-manager-web-organization`   //当前模块路由（前缀用）
const moduleName = `powermop_permit_manager_web_organization`     //当前模块modle空间名（前缀用）

// 开发baseURL
const dev_baseURL = "http://10.10.10.162.7000/powermop-app-manager-web-platform-products"

// 测试baseURL
const test_baseURL = "http://192.168.0.121.5201/powermop-app-manager-web-platform-products"

// 生成baseURL
const prod_baseURL = "http://192.168.0.121.5202/powermop-app-manager-web-platform-products"

// 环境判断
let baseURL
switch(ENV){
  case 'dev':
    baseURL = dev_baseURL
    break

  case 'test':
    baseURL = test_baseURL
    break

  case 'prod':
    baseURL = prod_baseURL
    break

  default:
    break
}

export default {
  moduleRoute,    
  moduleName,     
  baseURL,
  methods: {
    demo: "orgine.pay.wx.demo",
    queryProductList: "com.orgine.modules.platform.web.queryProductList",
    createProduct: "com.orgine.modules.platform.web.createProduct",
    queryProductDetail: "com.orgine.modules.platform.web.queryProductDetail",
    deleteProduct: "com.orgine.modules.platform.web.deleteProduct",
    editProduct: "com.orgine.modules.platform.web.editProduct",
    //应用加入版本库
    setProductToRepository: "com.orgine.modules.platform.web.setProductToRepository",
    //获取用户信息
    queryUser: "com.orgine.modules.platform.web.queryUser",
    //应用团队详情
    queryProductTeam: "com.orgine.modules.platform.web.queryProductTeam",
    //应用团队添加
    addProductTeam: "com.orgine.modules.platform.web.addProductTeam",
    //应用团队成员删除
    removeProductTeam: "com.orgine.modules.platform.web.removeProductTeam",
    //应用团队权限修改
    editProductTeam: "com.orgine.modules.platform.web.editProductTeam",
  },

  //内页路由配置
  routes: [
    { route: `${moduleRoute}/organization-manager/organization-create-post`, name: '创建岗位' }, 
    { route: `${moduleRoute}/organization-manager/organization-edit-post`, name: '修改岗位' }, 
    { route: `${moduleRoute}/organization-manager/organization-create-department`, name: '创建部门' },
    { route: `${moduleRoute}/organization-manager/organization-edit-department`, name: '修改部门' }, 
    { route: `${moduleRoute}/organization-manager/organization-authorization`, name: '岗位授权' }, 
  ],
}