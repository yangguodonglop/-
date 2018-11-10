import React from 'react'
import styles from "../index.less"
import {  Button } from 'antd'
import router from "umi/router"

import { GlobalComponents } from 'components'
import { connect } from "dva"
import constant from '../../constant'
import Treenodefrom from './components/indextree'
const { YQFilterGroup } = GlobalComponents
const { moduleName } = constant




const listProduct = ({ current_state, dispatch }) => {
    const { FirstList } = current_state

    let FilterWrapFirst = {
        subsriptions: "应用类别",
        defaultValue: "all",
        selfId: "product_type",
        selfText: "product_name",
        selfCount: "count",
        groupArray: FirstList,
    }
    FilterWrapFirst.onChange = (param) => {
        //更新页面为第一页
        // dispatch({ type: `${moduleName}_organization_manager/updatePage`, payload: 1 })
        console.log(param)
        const nowparam = {
            account_id: localStorage.getItem('account_id'),
            product_id: param.product_id,

        }
        // dispatch({
        //   type: `${moduleName}_organization_manager/updateParam`,
        //   payload: param,
        // })
        dispatch({
            //type: `${moduleName}_organization_manager/queryList` }
            type: `${moduleName}_organization_manager/AuthorizationList`,
            payload: nowparam,
        })
        // dispatch({ type: `${moduleName}_organization_manager/queryList` })
    }

    
const treeparam={
    test:(checkedKeys,e) => {
        // console.log(e)
        // let array = checkedKeys
        // this.setState(
        //   {
        //     checkedData: array,
        //   }
        // )
      // this.props.test(checkedKeys, e)
       console.log(e.halfCheckedKeys)
      },
}

      const saveSettings = () => {
        const { dispatch } = this.props
        const list = {
          account_id: "YQ001",
          enterprise_id: "YQ00000001",
          role_id: "1",
        }
        console.log(FirstList)
        dispatch({
          type: `${moduleName}_organization_manager/saveSettinglist`,
          payload: list,
          callBack: () => {
            //提交成功后清空数据返回
            this.props.form.resetFields()
            router.push({
              pathname: '/powermop-permit-manager-web-user/user-manager',
            })
          },
        })
      }

    return (
        <div className={styles.page_create}>
            <div className={styles.style_con}>
                <div className={styles.filterWrap}>
                    <YQFilterGroup {...FilterWrapFirst} />
                </div>
                <Treenodefrom {...treeparam} />
                <Button type="primary" onClick={() => saveSettings()}>
                保存设置
                 </Button>
         
            </div>

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


export default connect(mapStateToProps)(listProduct)

