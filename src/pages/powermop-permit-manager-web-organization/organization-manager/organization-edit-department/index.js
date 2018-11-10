import React from "react"
import { connect } from "dva"
import { Form, Input, Button, Select } from "antd"
import router from "umi/router"
import styles from "../index.less"
import { TreeSelect } from 'antd'



import constant from '../../constant'
//import Demo from "./components/createForm"
const Option = Select.Option

const FormItem = Form.Item

const { moduleName } = constant





class createProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      textNum: 0,
      loading: false,
      value: undefined,
    }
  }

  //提交表单
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const { detailInfo } = this.props.current_state
    this.props.form.validateFields((err) => {
      if (!err) {

        console.log(this.props)
        const fields = getFieldsValue()
        //调用新增

        const nowparam = {
          ...fields,
          account_id: localStorage.getItem('account_id'),
          parent_org_id: detailInfo.parent_org_id,
        }
        dispatch({
          type: `${moduleName}_organization_manager/editDepartment`,
          payload: nowparam,
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
  //点击获取组织机构id
  onChange = (value) => {
    const { dispatch } = this.props

    this.setState({ value })
    const nowparam = {
      account_id: localStorage.getItem('account_id'),
      user_name: "",
      org_id: value,
    }
    dispatch({
      type: `${moduleName}_organization_manager/departmentheadlist`,
      payload: nowparam,
    })

  }

  render() {
    const { departmentlist, postHeadlist } = this.props.current_state

    const { getFieldDecorator } = this.props.form

    const { detailInfo } = this.props.current_state
    
    const { query } = this.props.location
 
    const formItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 8 } }


    return (
      <div className={styles.page_create}>
        <Form onSubmit={this.handleSubmit}>

          <FormItem label="部门名称" {...formItemLayout}>
            {getFieldDecorator("org_name", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.org_name,
            })(
              <Input placeholder="请输入" />
            )}

          </FormItem>
          <FormItem label="所属部门" {...formItemLayout}>
            {getFieldDecorator("org_id", {
              rules: [{
                required: true, message: '请选择负责人',
              }],
              initialValue: query ? query.org_id: "",
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

          <FormItem label="部门负责人" {...formItemLayout}>
            {getFieldDecorator("org_head", {
              rules: [{
                required: true,
              }],
              initialValue: detailInfo.org_head,
            })(
              <Select {...postHeadlist} >
                {postHeadlist.length > 0
                  ? postHeadlist.map((item, index) => {
                    return (
                      <Option key={index} value={item.org_id}>{item.user_name}*</Option>
                    )
                  })
                  : null}
              
              </Select>
            )}
          </FormItem>
          <FormItem label="创建人" {...formItemLayout}>
            {getFieldDecorator("create_user", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.create_user,
            })(
              <span> {detailInfo.create_user}</span>
            )}
          </FormItem>
          <FormItem label="创建时间" {...formItemLayout}>
            {getFieldDecorator("create_time", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.create_time,

            })(
              <span> {detailInfo.create_time}</span>
            )}
          </FormItem>
          <FormItem label="修改人" {...formItemLayout}>
            {getFieldDecorator("modify_user", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.modify_user,
            })(
              <span> {detailInfo.modify_user}</span>)}
          </FormItem>
          <FormItem label="修改时间" {...formItemLayout}>
            {getFieldDecorator("modify_time", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.modify_time,
            })(
              <span> {detailInfo.modify_time}</span>
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