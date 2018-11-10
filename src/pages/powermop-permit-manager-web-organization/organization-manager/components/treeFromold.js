import React from "react"
import { Tree, Menu, Dropdown, Icon } from 'antd'
// import { Tree} from 'antd'
import { Link } from "react-router-dom"
import { GlobalComponents } from 'components'

import { connect } from "dva"
import constant from '../../constant'
import styles from "./index.less"

const { moduleName } = constant

//import Muendown from "../components/alertbox"


const TreeNode = Tree.TreeNode


const { YQModalCheck } = GlobalComponents

class DemoFrom extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataId: "",
    }
  }

  onClick = (e, info) => {
    this.props.test(1, e, info)


  };
  onClickDelete = () => {
    //alert(e)
  }

  //删除
  deleteFun = (org_id) => {
    const { dispatch } = this.props
    const nowprame = {
      org_id: org_id,
      account_id: localStorage.getItem("account_id"),
    }
    dispatch({
      type: `${moduleName}_organization_manager/deleteProduct`,
      payload: nowprame,
    })
  }
  render() {
    let nowid1 = localStorage.getItem('numbersIdkey')
    //批量删除
    const ModalCheckWraps = {
      onOk() {
        this.deleteFun()
      },
    }
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
          <YQModalCheck {...ModalCheckWraps} title="是否确认删除"
            data={[nowid1]}
            onOk={this.deleteFun.bind(null, [(nowid1)])}>
            <a className={styles.pointer}>删除</a>
          </YQModalCheck>
        </Menu.Item>
      </Menu>
    )



    return (
      <div className="container">

        <Tree
          defaultExpandAll
          onClick={this.onClick}
          showLine

        >
          {this.props.data.length > 0
            ? this.props.data.map((item) => {
              return (
                <TreeNode title={<div key={item.id}>{item.name}</div>} key={item.id}>{item.name}}>
										{item.children.length > 0
                    ? item.children.map((flag) => {
                      return (
                        <TreeNode title={<div key={flag.id}>
                          <div style={{ float: "left" }} id={flag.id}>{flag.name}</div>
                          <div style={{ color: "blue", float: "left", marginLeft: '5px' }}>
                            <div>
                              <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" href="#">
                                  <Icon type="setting" style={{ color: '#333333' }} />
                                </a>
                              </Dropdown>
                            </div>
                          </div>
                        </div>} key={flag.id} id={flag.name}>
                          {flag.children.length > 0
                            ? flag.children.map((list) => {
                              return (
                                <TreeNode title={<div>
                                  <div style={{ float: "left" }} id={list.id}>{list.name}</div>
                                  <div style={{ color: "blue", float: "left", marginLeft: '5px' }}>
                                    <div>
                                      <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                          <Icon type="setting" style={{ color: '#333333' }} />
                                        </a>
                                      </Dropdown>
                                    </div>
                                  </div>
                                  {list.extName = " "
                                    ?
                                    <div style={{ color: "blue", float: "left", marginLeft: '5px' }}><Icon type="info-circle" style={{ color: '#FAAD14' }} /></div>
                                    : null
                                  }
                                </div>} key={list.id} >
                                  {list.children.length > 0
                                    ? list.children.map((list1) => {
                                      return (
                                        <TreeNode title={<div>
                                          <div style={{ float: "left" }} id={list1.id}>{list1.name}</div>
                                          <div style={{ color: "blue", float: "left", marginLeft: '5px' }}>
                                            <div>
                                              <Dropdown overlay={menu} trigger={['click']}>
                                                <a className="ant-dropdown-link" href="#">
                                                  <Icon type="setting" style={{ color: '#333333' }} />
                                                </a>
                                              </Dropdown>
                                            </div>
                                          </div>
                                          {list.extName = " "
                                            ?
                                            <div style={{ color: "blue", float: "left", marginLeft: '5px' }}><Icon type="info-circle" style={{ color: '#FAAD14' }} /></div>
                                            : null
                                          }
                                        </div>} key={list1.id} >

                                        </TreeNode>
                                      )
                                    })
                                    : null}

                                </TreeNode>
                              )
                            })
                            : null}

                        </TreeNode>
                      )
                    })
                    : null}
                </TreeNode>
              )
            })
            : null}
        </Tree>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { powermop_permit_manager_web_organization_organization_manager, loading } = state
  return {
    loading,
    current_state: powermop_permit_manager_web_organization_organization_manager,
  }
}

export default connect(mapStateToProps)(DemoFrom)