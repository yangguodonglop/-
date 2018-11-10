import React from "react"
import { Tree, Icon } from 'antd'
//import { Tree, Menu } from 'antd'
// import { Tree} from 'antd'
//import { GlobalComponents } from 'components'
import Meundown from "./Meundown"
import { connect } from "dva"
import constant from '../../constant'

//import styles from "./index.less"

const { moduleName } = constant


//import Muendown from "../components/alertbox"


const TreeNode = Tree.TreeNode




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

  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={
            <div key={item.id}>
              <div style={{ float: "left" }} id={item.id}>{item.name}</div>
              <div style={{ color: "blue", float: "left", marginLeft: '5px' }}>
                <Meundown />
              </div>
              { item.extName.length === 0
                ?
                <div style={{ color: "blue", float: "left", marginLeft: '5px' }}><Icon type="info-circle" style={{ color: '#FAAD14' }} /></div>
                : <div> </div>
              }
            </div>
          }
            key={item.id} dataRef={item}  >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode {...item} dataRef={item} />
    })
  }



  render() {
    // 
    //批量删除


    console.log(this.props.data)


    return (
      <div className="container">

        <Tree
          defaultExpandAll
          onClick={this.onClick}
          showLine

        >
          {this.renderTreeNodes(this.props.data)}
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