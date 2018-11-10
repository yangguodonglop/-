//创建应用表单

import React from "react"
import { TreeSelect } from 'antd'
// import { Form, Input, Row, Select, Button, Radio } from "antd"
import { connect } from "dva"
import {moduleName} from "../../../constant"

// const FormItem = Form.Item
// const Option = Select.Option
// const { TextArea } = Input
// const RadioGroup = Radio.Group



  class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    state = {
      value: "22222",
    }
  
    onChange = (value) => {
      console.log(value)
      this.setState({ value })
 
      const { dispatch } = this.props
      dispatch({ type: `${moduleName}_organization_manager/updateUserArr1`, payload: value })
    }
  
    render() {


const treeData = [{
    title: '研发中心',
    value: '0-0',
    key: '0-0',
    children: [{
      title: '项目研发部',
      value: '0-0-1',
      key: '0-0-1',
      children:[{
        title:'研发一部',
        value:'0-0-1-0',
        key:'0-0-1-0',
      },{
        title:'研发二部',
        value:'0-0-1-1',
        key:'0-0-1-1', 
        children:[{
            title:'研发一组',
            value:'0-0-2-0-0',
            key:'0-0-2-0-0',
          },{
            title:'研发二组',
            value:'0-0-2-0-1',
            key:'0-0-2-0-1', 
          }],
      }],
    }, {
      title: '产品研发部',
      value: '0-0-2',
      key: '0-0-2',
      children:[{
        title:'产品一部',
        value:'0-0-2-0',
        key:'0-0-2-0',
      },{
        title:'产品二部',
        value:'0-0-2-1',
        key:'0-0-2-1', 
      }],
    }],
  }]

      return (
        <TreeSelect
          style={{ width: 400 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          placeholder="请选择"
          treeDefaultExpandAll
          onChange={this.onChange}
          defaultValue={this.state.value}        />
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