import React from 'react'
import { Divider, Button, Tooltip, Table, Pagination } from 'antd'
import { Link } from "react-router-dom"
import styles from "./index.less"
import router from 'umi/router'
import { connect } from "dva"
import constant from '../constant'

import { GlobalComponents } from 'components'
import DemoFrom from "./components/treeFrom"
import { Alert } from 'antd'
//import Postinfo from "./components/postInfo"
//import Info from "./components/deleteInfo"
//import { Modal} from 'antd'

const { YQTableSelect, YQModalCheck } = GlobalComponents
const { moduleName } = constant


const listProduct = ({ location, current_state, dispatch, loading }) => {

  const { list, total, FirstList, selectedRows, organizationlist, departmentlist, detailInfo, singleuser } = current_state

  const { pathname, query } = location

  let FilterWrapFirst = {
    subsriptions: "应用类别",
    defaultValue: "all",
    selfId: "product_type",
    selfText: "text",
    selfCount: "count",
    groupArray: FirstList,
  }

  FilterWrapFirst.onChange = (param) => {
    //更新页面为第一页
    dispatch({ type: `${moduleName}_organization_manager/updatePage`, payload: 1 })
    dispatch({
      type: `${moduleName}_organization_manager/updateParam`,
      payload: param,
    })

    dispatch({ type: `${moduleName}_organization_manager/queryList` })
  }



  // const warning = () => {
  //   message.warning('应用概览页面暂未开发，敬请期待！')
  // }


  //搜索按钮集合数据
  const handSearhProps = {
    selectdata: [{
      label: '岗位名称',
      type: 'Input_01',
      name: 'role_name',
    }, {
      label: '启用状态',
      type: 'Select_01',
      name: 'enabled_state',
      children: [{
        label: "1",
        value: "已启用",
      }, {
        label: "0",
        value: "未启用",
      }],
    }],

    search(param) {
      //更新页面为第一页
      dispatch({ type: `${moduleName}_organization_manager/updatePage`, payload: 1 })
      //更新搜索条件参数
      dispatch({
        type: `${moduleName}_organization_manager/updateSelectParam`,
        payload: param,
      })
      const aa = {

      }
      dispatch({
        type: `${moduleName}_organization_manager/updateParam`,
        payload: aa,
      })
      //更新列表
      dispatch({ type: `${moduleName}_organization_manager/queryList` })
    },
  }

  //删除
  const deleteFun = (org_id) => {
    org_id ?
      dispatch({
        type: `${moduleName}_organization_manager/deleteProduct`,
        payload: { account_id: "9999", org_id },
      }) :
      dispatch({
        type: `${moduleName}_organization_manager/deleteProduct`,
        payload: { org_id: selectedRows.map(_ => _.role_id), account_id: "9999" },
      })
  }

  //批量删除
  const ModalCheckWraps = {
    title: "删除岗位",
    text: "岗位",
    data: selectedRows.map(_ => _.role_name),
    onOk() {
      deleteFun()
    },
  }
  //授权
  this.handleClick = (nowId, event) => {
    event.preventDefault()
    console.log(nowId)
  }
  //表格
  const tableProps = {
    loading: loading.effects[`${moduleName}_organization_manager/queryList`],
    dataSource: list,
    rowKey: `role_id`,
    columns: [{
      title: '岗位名称',
      dataIndex: 'role_name',
    }, {
      title: '所属部门',
      dataIndex: 'org_name',
    }, {
      title: '启用状态',
      render: (record) => {

        return (
          <span style={{ color: (record.enabled_state === "1") ? "green" : "red" }}>
            {(record.enabled_state === "1") ? "启用" : "未启用"}</span>
        )
      },
    }, {
      title: '创建时间',
      dataIndex: 'create_time',
    }, {
      title: '创建人',
      dataIndex: 'create_user',
    }, {
      title: '操作',
      align: "right",
      render: (record) => {
        let role_id = record.role_id
        let org_id = record.org_id
        return (
          <div>
            <Link
              to={`${pathname}/organization-edit-post?role_id=${role_id}&org_id=${org_id}`}>
              修改
            </Link>
            <Divider type="vertical" />
            <Link
              to={`${pathname}/organization-authorization?role_id=${role_id}`}>
              授权
            </Link>
            <Divider type="vertical" />
            <YQModalCheck title="是否确认删除"
              data={[record.org_id]}
              onOk={deleteFun.bind(null, [(record.org_id)])}>
              <a className={styles.pointer}>删除</a>
            </YQModalCheck>
          </div>
        )
      },
    }],
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        dispatch({
          type: `${moduleName}_organization_manager/updateState`,
          payload: { selectedRows },
        })
      },
    },
    pagination: false,
  }

  // 分页器
  const paginationProps = {
    showQuickJumper: true,
    hideOnSinglePage: (Number(total) === 0),
    current: Number(query.page) || 1,
    total: Number(total),
    showTotal: total => `20条/页 共 ${total} 条`,
    onChange(page) {
      router.push({
        pathname,
        query: {
          ...query,
          page,
        },
      })
    },
  }
  //const { org_name } = query
  const treeparam = {
    data: organizationlist,
    data1: departmentlist,
    test: (a, e, info) => {
      console.log(info.props.dataRef)
      if (e.target.nodeName === 'DIV') {
        let org_id=info.props.dataRef.id
        let pid=info.props.dataRef.pid
        let numbersId = info.props.eventKey
        localStorage.setItem('numbersIdkey', numbersId)
       
        const nowparam = {
          org_id: org_id,
          pid:pid,
        }
        dispatch({
          type: `${moduleName}_organization_manager/updateState`,
          payload: { nowparam: nowparam },
        })

        dispatch({
          type: `${moduleName}_organization_manager/departmentEditDetail`,
          callBack: () => {
            dispatch({
              type: `${moduleName}_organization_manager/singleuserinformation`,
              payload: { user_id: detailInfo.org_id },
            })
          },
        })

        dispatch({
          type: `${moduleName}_organization_manager/queryList`,
        })
      }

    },
  }
  // const postparam = {
  //   data:postparamlist,
  //   // test:(a)=>{
  //   //     alert(a)
  //   // },
  // }


  return (
    <div className={styles.page_wrap}>
      <div className={styles.title_line}>
        <span className={styles.title}>组织机构</span>
        <div className={styles.btns}>
          <Button icon="sync" onClick={() => router.go()} />
          <YQModalCheck {...ModalCheckWraps}>
            <Button className={styles.deleteBtn}>批量删除</Button>
          </YQModalCheck>
          <Button type="primary">
            <Link to={`${pathname}/organization-create-post`}>创建岗位</Link>
          </Button>
        </div>
      </div>
      <div className={styles.form_section_con}>
        <div className={styles.form_section_l}>
          <Alert message="2个部门未设置负责人" type="warning" showIcon style={{ marginTop: "10" }} className={styles.form_section_alert} />
          <DemoFrom  {...treeparam} />
        </div>
        <div className={styles.form_section_r}>
          <div className={styles.form_section}>
            <div className={styles.left}>
              <YQTableSelect {...handSearhProps} />
            </div>
            <div className={styles.right}>
              <Tooltip placement="top" title='设置'><Button icon="setting" /></Tooltip>
              <Tooltip placement="top" title='帮助'><Button icon="question-circle-o" /></Tooltip>
            </div>
          </div>


          <div className={styles.department_con}>
            <div className={styles.department_l}>
              <span className={styles.department_span_l}>部门：{detailInfo.org_name}</span>
              <span className={styles.department_span_l} style={{ marginLeft: '40px' }}>部门负责人：{singleuser.user_name}</span>
            </div>
          </div>
          <Table {...tableProps} />
          <Pagination {...paginationProps} />
        </div>
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