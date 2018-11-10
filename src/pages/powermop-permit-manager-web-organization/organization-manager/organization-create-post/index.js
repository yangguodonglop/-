import React from "react"
import { connect } from "dva"
import { Form, Input,   Button,Radio } from "antd"
import router from "umi/router"
import styles from "../index.less"


import constant from '../../constant'
//import Demo from "./components/createForm"
import { TreeSelect } from 'antd'
const RadioGroup = Radio.Group

const FormItem = Form.Item

const { moduleName } = constant




class createProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      textNum: 0,
      loading: false,
      value:'',
    }
  }

  //提交表单
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    this.props.form.validateFields((err) => {
      if (!err) {
          
        const fields = getFieldsValue()
        //调用新增
         
       dispatch({
        type: `${moduleName}_organization_manager/updateParam`,
        payload: fields,
      })
        dispatch({
          type: `${moduleName}_organization_manager/createPost`,
          payload: fields,
          callBack: () => {
            this.props.form.resetFields()
            router.push({
              pathname: '/powermop-permit-manager-web-organization/organization-manager',
            })
          },
        })
      }
    })
  }

  //取消清空数据并返回
  onBack = () => {
    this.props.form.resetFields()
    router.push({
      pathname: '/powermop-permit-manager-web-organization/organization-manager',
    })
  }


  //更改文本输入域的长度
  textAreaNum = (e) => {
    this.setState({
      textNum: (e.target.value).length,
    })
  }



  render() {
    const {departmentlist} =this.props.current_state
    // const departmentparm={
    
    //   // list: (departmentlist && departmentlist[0].length !== 0 ) ? departmentlist[0] : [],
    //   list: (departmentlist) ? departmentlist : [],
    // }
    // const treeparam = {
    //   data:postorganizationlist
    // }
    const { getFieldDecorator } = this.props.form
    const formItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 8 } }
    return (
      <div className={styles.page_create}>
        
        <Form onSubmit={this.handleSubmit}>
          

          <FormItem label="岗位名称" {...formItemLayout}>
            {getFieldDecorator("role_name", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              
            })(
              <Input placeholder="请输入" />
            )}
           
          </FormItem>
          <FormItem label="所属部门" {...formItemLayout}>
            {getFieldDecorator("org_id", {
              rules: [{
                required: true, message: '请选择负责人',
              }],
              initialValue: "请选择",
            })(
              <TreeSelect
              style={{ width: 400 }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={departmentlist}
              placeholder="请选择"
              treeDefaultExpandAll
              onChange={this.onChange}
              />
            )}
          
          </FormItem>
        
          <FormItem label="启用状态" {...formItemLayout}>
            {getFieldDecorator("enabled_state", {
                rules: [{
                  required: true,
                }],
                initialValue: 1,
            })(
              <RadioGroup>
                <Radio value={1}>启用</Radio>
                <Radio value={2}>禁用</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem className={styles.submitPosition}>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button className={styles.btn} onClick={this.onBack} style={{ marginLeft: 10 }}>取消</Button>
          </FormItem>

        </Form>

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

export default connect(mapStateToProps)(Form.create()(createProduct))