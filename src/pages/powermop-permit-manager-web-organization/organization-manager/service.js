import { apiPrefix } from 'config'
import { request } from 'utils'
import constant from "../constant"
const { methods } = constant

export function queryFilterWarpFirst(params) {
  return request({
    url: `${apiPrefix}/organization-manager/filterWrapFirst`,
    method: 'get',
    headmethod: methods.demo,
    data: params,
  })
}

export function queryList(params) {
  return request({
    url: `${apiPrefix}/organization-manager/list`,
    method: 'get',
    headmethod: methods.queryProductList,
    data: params,
  })
}

export function createProduct(params) {
  return request({
    url: `${apiPrefix}/organization-manager/createProduct`,
    method: 'get',
    headmethod: methods.createProduct,
    data: params,
  })
}

export function editProduct(params) {
  return request({
    url: `${apiPrefix}/organization-manager/createProduct`,
    method: 'get',
    headmethod: methods.editProduct,
    data: params,
  })
}

export function queryProductDetail(params) {
  return request({
    url: `${apiPrefix}/organization-manager/queryProductDetail`,
    method: 'get',
    headmethod: methods.queryProductDetail,
    data: params,
  })
}

export function setProductToRepository(params) {
  return request({
    url: `${apiPrefix}/product-manager/setProductToRepository`,
    method: 'get',
    headmethod: methods.setProductToRepository,
    data: params,
  })
}

export function deleteProduct(params) {
  return request({
    url: `${apiPrefix}/organization-manager/deleteProduct`,
    method: 'get',
    headmethod: methods.deleteProduct,
    data: params,
  })
}

export function queryProductTeam(params) {
  return request({
    url: `${apiPrefix}/product-manager/queryProductTeam`,
    method: 'get',
    headmethod: methods.queryProductTeam,
    data: params,
  })
}

export function queryUser(params) {
  return request({
    url: `${apiPrefix}/product-manager/queryUser`,
    method: 'get',
    headmethod: methods.queryUser,
    data: params,
  })
}

export function addProductTeam(params) {
  return request({
    url: `${apiPrefix}/product-manager/addProductTeam`,
    method: 'get',
    headmethod: methods.addProductTeam,
    data: params,
  })
}

export function removeProductTeam(params) {
  return request({
    url: `${apiPrefix}/product-manager/removeProductTeam`,
    method: 'get',
    headmethod: methods.removeProductTeam,
    data: params,
  })
}

export function editProductTeam(params) {
  return request({
    url: `${apiPrefix}/product-manager/editProductTeam`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
}



//查询当前组织机构树形列表
export function organizationlist(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/organizationlist`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
}

//部门和部门负责人查询
export function postparamlist(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/postparamlist`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
}

  //修改岗位进去时页面查询显示默认字段
export function postEditDetail(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/postEditDetail`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
}


  //修改岗位进去时页面查询显示默认字段
  export function departmentEditDetail(params) {
 
    return request({
      url: `${apiPrefix}/organization-manager/departmentEditDetail`,
      method: 'get',
      headmethod: methods.editProductTeam,
      data: params,
    })
  }

    //岗位授权进去时页面查询显示默认字段
    export function AuthorizationList(params) {
 
      return request({
        url: `${apiPrefix}/organization-manager/AuthorizationList`,
        method: 'get',
        headmethod: methods.editProductTeam,
        data: params,
      })
    }

    
    //岗位授权保存
    export function saveSettinglist(params) {
 
      return request({
        url: `${apiPrefix}/organization-manager/saveSettinglist`,
        method: 'get',
        headmethod: methods.editProductTeam,
        data: params,
      })
    }
    
    //选择部门组织列表
    export function postorganizationlist(params) {
 
      return request({
        url: `${apiPrefix}/organization-manager/postorganizationlist`,
        method: 'get',
        headmethod: methods.editProductTeam,
        data: params,
      })
    } 

    //创建岗位
    export function createPost(params) {
 
      return request({
        url: `${apiPrefix}/organization-manager/createPost`,
        method: 'get',
        headmethod: methods.editProductTeam,
        data: params,
      })
    } 

  //修改岗位提交
  export function editPost(params) {
 
    return request({
      url: `${apiPrefix}/organization-manager/editPost`,
      method: 'get',
      headmethod: methods.editProductTeam,
      data: params,
    })
  } 

  //创建部门提交
  export function createDepartment(params) {
 
    return request({
      url: `${apiPrefix}/organization-manager/createDepartment`,
      method: 'get',
      headmethod: methods.editProductTeam,
      data: params,
    })
  } 
  
//修改部门提交
export function editDepartment(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/editDepartment`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
} 

//部门负责人查询
export function departmentheadlist(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/departmentheadlist`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
} 

//根据单个用户信息查询部门对应负责人

export function singleuserinformation(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/singleuserinformation`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
} 
/************授权新加 **********/

//应用列表查询
export function applicationName(params) {
 
  return request({
    url: `${apiPrefix}/organization-manager/applicationName`,
    method: 'get',
    headmethod: methods.editProductTeam,
    data: params,
  })
} 



   
  

    
