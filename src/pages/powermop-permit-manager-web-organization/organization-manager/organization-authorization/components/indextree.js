import React from "react"
import { Tree } from 'antd'
import '../components/index.less'
import styles from '../components/index.less'
import { connect } from "dva"
// import {connect} from "dva"

//import constant from '../../../constant'

//const { moduleName } = constant

const TreeNode = Tree.TreeNode

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedData: this.props.current_state.checkedKeys,
    }
  }

  onCheck=(checkedKeys, e) => {
    //console.log(e)
    let array = checkedKeys
    this.setState(
      {
        checkedData: array,
      }
    )
  this.props.test(checkedKeys, e)
  }
  render() {
    const { authorizationlist } = this.props.current_state
    
    const renderTreeNodes = (data) => {
      return data.map((item) => {
        if (item.children) {
          return (
            <TreeNode title={item.title} key={item.key} dataRef={item}>
              {
                item.children.length>0?
                renderTreeNodes(item.children):renderTreeNodes(item.oper_list)}
                {/* {renderTreeNodes(item.children)} */}
            </TreeNode>
          )
        }
        return <TreeNode {...item} />
      })
    }
  
    return (

      <div>
        <Tree
          checkable
          // defaultCheckedKeys={this.state.checkedData.length===0?checkedKeys:this.state.checkedData}
          checkedKeys={this.state.checkedData}
          defaultExpandAll={true}
          multiple={true}
          className={styles.customSelect}
          onCheck={this.onCheck}
          // checkStrictly
          // onCheck={(checkedKeys, e) => {
          //   console.log(e)
          //   let array = checkedKeys
          //   this.setState(
          //     {
          //       checkedData: array,
          //     }
          //   )
          // }}
        >
          {renderTreeNodes(authorizationlist)}
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


export default connect(mapStateToProps)(Demo)