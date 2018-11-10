import React from "react"
import { Menu, Dropdown, Icon,Popconfirm } from 'antd'
import { Link } from "react-router-dom"


//const { pathname } = location

class Muendown extends React.Component{


  
render(){

    // //删除
    // const deleteFun = (org_id) => {
    //   org_id ?
    //     dispatch({
    //       type: `${moduleName}_organization_manager/deleteProduct`,
    //       payload: org_id,
    //     }) :
    //     dispatch({
    //       type: `${moduleName}_organization_manager/deleteProduct`,
    //       payload: selectedRows.map(_ => _.role_name),
    //     })
    // }
  const menu = (
    <Menu>
      <Menu.Item key="0">
       <Link to={`/powermop-permit-manager-web-organization/organization-manager/organization-create-department`}>创建下级部门</Link> 
      </Menu.Item>
      <Menu.Item key="1">
      <Link to={`/powermop-permit-manager-web-organization/organization-manager/organization-create-department`}>创建平级部门</Link> 
      </Menu.Item>
      <Menu.Item key="3">
      <Link to={`/powermop-permit-manager-web-organization/organization-manager/organization-edit-department`}>修改部门</Link> 
     </Menu.Item>
     <Menu.Item key="4">
     <Popconfirm title="是否删除该项？" okText="确认" cancelText="取消">
            <a>删除</a>
      </Popconfirm>
        
     </Menu.Item>
    </Menu>
  )
  return(
    <div>
       <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" href="#">
        <Icon type="down" />
      </a>
    </Dropdown>
    </div>
  )
}

} 
export default Muendown
 