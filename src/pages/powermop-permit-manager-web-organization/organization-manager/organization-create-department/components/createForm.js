//创建应用表单

import React from "react"
import { TreeSelect } from 'antd'
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

  class Demo extends React.Component {
    state = {
      value: undefined,
    }
  
    onChange = (value) => {
      console.log(value)
      this.setState({ value })
    }
  
    render() {
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

export default Demo