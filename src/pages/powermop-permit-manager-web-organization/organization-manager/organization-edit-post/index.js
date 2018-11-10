import React from "react"
import { connect } from "dva"
import { Form, Input,   Button,Radio } from "antd"
import router from "umi/router"
import styles from "../index.less"

import { TreeSelect } from 'antd'

import constant from '../../constant'
//import Demo from "./components/createForm"
const RadioGroup = Radio.Group


const FormItem = Form.Item

const { moduleName } = constant

//上传控制
const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}



class createProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      textNum: 0,
      loading: false,
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
          
          
        const fields = getFieldsValue()
        //调用新增
        const nowparam = {
          ...fields,
          account_id: localStorage.getItem('account_id'),
          org_id:fields.org_id,
          role_id:detailInfo.role_id,
        }
        dispatch({
          type: `${moduleName}_organization_manager/editPost`,
          payload: nowparam,
          // callBack: () => {
          //   this.props.form.resetFields()
          //   router.push({
          //     pathname: '/powermop-permit-manager-web-organization/organization-manager',
          //   })
          // },
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

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }))
    }
  }

  //更改文本输入域的长度
  textAreaNum = (e) => {
    this.setState({
      textNum: (e.target.value).length,
    })
  }

  render() {
    const {departmentlist} =this.props.current_state

    const { getFieldDecorator } = this.props.form

    const { detailInfo } = this.props.current_state


    const formItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 8 } }
 

    return (
      <div className={styles.page_create}>
        
        <Form onSubmit={this.handleSubmit}>
          

          <FormItem label="岗位名称" {...formItemLayout}>
            {getFieldDecorator("role_name", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.role_name,

            })(
              <Input placeholder="请输入"  />
            )}
           
          </FormItem>
          <FormItem label="所属部门" {...formItemLayout}>
            {getFieldDecorator("org_id", {
              rules: [{
                required: true, message: '请选择负责人',
              }],
              initialValue: detailInfo.org_name,
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
                initialValue: detailInfo.enabled_state,
            })(
              <RadioGroup>
                <Radio value={0}>启用</Radio>
                <Radio value={1}>禁用</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem label="创建人" {...formItemLayout}>
            {getFieldDecorator("create_user", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.create_user,

            })(
              <span>{detailInfo.create_user}</span>
            )}
          </FormItem>
          <FormItem label="创建时间" {...formItemLayout}>
            {getFieldDecorator("create_time", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.create_time,

            })(
              <span>{detailInfo.create_time}</span>
            )}
          </FormItem>
          <FormItem label="修改人" {...formItemLayout}>
            {getFieldDecorator("modify_user", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.modify_user,

            })(
              <span>{detailInfo.modify_user}</span>
            )}
          </FormItem>
          <FormItem label="修改时间" {...formItemLayout}>
            {getFieldDecorator("modify_time", {
              rules: [{
                required: true, message: '请输入应用名称',
              }],
              initialValue: detailInfo.modify_user,

            })(
              <span>{detailInfo.modify_time}</span>
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
  const {powermop_permit_manager_web_organization_organization_manager, loading } = state
  return {
    loading,
    current_state: powermop_permit_manager_web_organization_organization_manager,
  }
}

export default connect(mapStateToProps)(Form.create()(createProduct))