import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import { Link } from "react-router-dom"
import { connect } from "dva"
import styles from "./index.less"

import constant from '../../constant'
import { GlobalComponents } from 'components'
const { moduleRoute,moduleName } = constant

const { YQModalCheck } = GlobalComponents
const Meundown = ({ dispatch, current_state }) => {


    const { nowparam } = current_state

    console.log("nowprame: " + JSON.stringify(nowparam))

//删除
this.deleteFun = (org_id) => {
    
    const nowprame = {
      org_id: org_id,
      account_id: localStorage.getItem("account_id"),
    }
    dispatch({
      type: `${moduleName}_organization_manager/deleteProduct`,
      payload: nowprame,
    })
  }

    const ModalCheckWraps = {
        onOk() {
            this.deleteFun()
        },
    }

    let nowid1 = localStorage.getItem('numbersIdkey')


    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to={`${moduleRoute}/organization-manager/organization-create-department?org_id=${nowparam.org_id}`}>创建下级部门</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to={`${moduleRoute}/organization-manager/organization-create-department?pid=${nowparam.pid}`}>创建平级部门</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to={`${moduleRoute}/organization-manager/organization-edit-department?org_id=${nowparam.org_id}`}>修改部门</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <YQModalCheck {...ModalCheckWraps} title="是否确认删除"
                    data={[nowid1]}
                    onOk={this.deleteFun.bind(null, [(nowid1)])}>
                    <a className={styles.pointer}>删除</a>
                </YQModalCheck>
            </Menu.Item>
        </Menu>
    )

    return (
        <div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    <Icon type="setting" style={{ color: '#333333' }} />
                </a>
            </Dropdown>
        </div>
    )
}



function mapStateToProps(state) {
    const { powermop_permit_manager_web_organization_organization_manager, loading } = state
    return {
        loading,
        current_state: powermop_permit_manager_web_organization_organization_manager,
    }
}


export default connect(mapStateToProps)(Meundown)