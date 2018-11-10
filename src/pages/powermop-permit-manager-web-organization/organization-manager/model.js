import modelExtend from 'dva-model-extend'
import { pageModel } from 'utils/model'
import { message } from 'antd'
import * as services from './service'
import constant from "../constant"

const { moduleRoute, moduleName } = constant
const params = {
  account_id: "YQ001",
  enterprise_id: "YQ00000001",
  role_name: "",
  enabled_state: "",
}
let account_id = "yq001"
let enterprise_id = "yq00001"
localStorage.setItem('account_id', account_id)
localStorage.setItem('enterprise_id', enterprise_id)

export default modelExtend(pageModel, {

  //命名空间
  namespace: `${moduleName}_organization_manager`,

  //状态
  state: {
    FirstList: [], //筛选集合一
    param: {}, //搜索条件入参
    selectParam: {}, //左上方搜索条件

    list: [],   //表格结果集数据列表
    total: 0,   //总条数
    selectedRows: [], //表格勾选项


    organizationlist: [], //组织结构集合
    departmentlist: [], //部门集合
    postparamlist: [],//部门，部门负责人信息
    authorizationlist: [],//岗位授权集合

    detailInfo: {}, //应用详情

    isRepository: "none", ////控制显示是否加入版本控制

    userArr: [],  //用户信息数据
    teamList: [], //团队列表数据
    nowdata: [], //自己测试数据
    nowdata1: [],// 自己测试数据
    postHeadlist: [],//

    checkedKeys: [],
    singleuser: [],//根据单个用户信息查询部门负责人集合
    //
    eidtPost: {

    },


    nowparam: {},
    
    org_name: "",
    fuzeiren: "",
  },

  //监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // 监听路由(起始进入列表页面初始化获取数据、默认选择第一页数据)
        if (pathname === `${moduleRoute}/organization-manager`) {
          //此处为进入首页路由逻辑
          const { page = 1 } = query
          //获取筛选集合一

          dispatch({ type: 'queryFilterWrapFirst' })
          //初始化当前页数为第一页
          dispatch({ type: 'updatePage', payload: page })
          //获取列表数据

          dispatch({ type: 'updateParam', payload: params })
          dispatch({ type: 'queryList' })
          //组织机构=列表

          dispatch({ type: 'organizationlist', payload: params })
          //部门和部门负责人列表
          dispatch({ type: 'postparamlist' })
        }

        if (pathname === `${moduleRoute}/organization-manager/organization-create-department`) {
          //此处为进入创建评级部门路由逻辑
         // const { product_id } = query
         dispatch({
          type: 'postorganizationlist',
        })
          const list = {
            account_id: localStorage.getItem('account_id'),
            org_id: localStorage.getItem('numbersIdkey'),
          }
          dispatch({
            type: `departmentEditDetail`,
            payload: list,
            callBack:()=>{
              const nowparam = {
                account_id: localStorage.getItem('account_id'),
                user_name: "",
                org_id: "0000000",
              }
              dispatch({
                type: `departmentheadlist`,
                payload: nowparam,
              })
            },
          })
          
        }
        if (pathname === `${moduleRoute}/organization-manager/organization-create-underdepartment`) {
          //此处为进入创建下级部门路由逻辑
          //const { product_id } = query
          const list = {
            account_id: localStorage.getItem('account_id'),
            org_id: localStorage.getItem('numbersIdkey'),
          }
          dispatch({
            type: `departmentEditDetail`,
            payload: list,
            callBack:()=>{
              const nowparam = {
                account_id: localStorage.getItem('account_id'),
                user_name: "",
                org_id: "0000000",
              }
              dispatch({
                type: `departmentheadlist`,
                payload: nowparam,
              })
            },
          })
        }

        if (pathname === `${moduleRoute}/organization-manager/organization-edit-department`) {
          console.log(query)
          //此处为进入修改部门部门路由逻辑

          dispatch({
            type: 'postorganizationlist',
          })
          const list = {
            account_id: localStorage.getItem('account_id'),
            org_id: localStorage.getItem('numbersIdkey'),
          }
          dispatch({
            type: `updateParam`,
            payload: list,
          })
          dispatch({
            type: `departmentEditDetail`,
            payload: list,

          })

        }
        if (pathname === `${moduleRoute}/organization-manager/organization-authorization`) {
          //此处为进入岗位授权页面路由逻辑
          const { role_id } = query

          const list = {
            account_id: "YQ001",
            product_id: "99999",
            enterprise_id: "YQ00000001",
            role_id: "1",
          }
          dispatch({
            type: `updateParam`,
            payload: list,
          })
          dispatch({
            type: `AuthorizationList`,
            payload: list,
          })

          const applicationparam = {
            account_id: localStorage.getItem('account_id'),
            org_id: localStorage.getItem('numbersIdkey'),
            role_id: role_id,
          }
          dispatch({
            type: `applicationName`,
            payload: applicationparam,
          })
        }


        if (pathname === `${moduleRoute}/organization-manager/organization-edit-post`) {
          //此处为进入修改岗位页面路由逻辑
          const { role_id, org_id } = query
          // console.log(org_id)
          // console.log(role_id)
          const organizationparam = {
            org_id: org_id,
            account_id: localStorage.getItem("account_id"),
          }
          dispatch({
            type: 'postorganizationlist',
            payload: organizationparam,
          })
          const nowprame = {
            role_id: role_id,
            account_id: localStorage.getItem("account_id"),
          }
          dispatch({
            type: 'postEditDetail',
            payload: nowprame,
          })
        }


        if (pathname === `${moduleRoute}/organization-manager/organization-create-post`) {
          //此处为进入创建岗位页面路由逻辑
          dispatch({
            type: 'postorganizationlist',
          })
        }
      })
    },
  },

  //异步请求
  effects: {

    //应用列表查询接口
    *queryFilterWrapFirst(action, { put, call }) {
      const { result, body } = yield call(services.queryFilterWarpFirst, { param: {} })
      const { info } = body
      if (result.code === "success") {
        yield put({ type: "updateState", payload: { FirstList: info } })
      } else {
        message.error(result.msg)
      }
    },

    *queryList(action, { put, call, select }) {
      const { pagein, param, selectParam } = yield select(_ => _[`${moduleName}_organization_manager`])
      const { result, body } = yield call(services.queryList, { pagein, param: { ...param, ...selectParam } })
      const { pageout, list } = body
      if (result.code === "success") {

        yield put({ type: "updateState", payload: { total: pageout.rowcountall, list } })
      } else {
        message.error(result.msg)
      }
    },



    //用户组织列表
    *organizationlist({ payload, callBack }, { put, call }) {
      const { result, body } = yield call(services.organizationlist, { param: payload })
      const { list } = body
      if (result.code === "success") {
        //更新组织架构集合
        yield put({ type: "updateorganizationlist", payload: list })
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },
    //部门选择组织列表
    *postorganizationlist({ payload, callBack }, { put, call }) {
      const { result, body } = yield call(services.postorganizationlist, { param: payload })
      const { info } = body
      if (result.code === "success") {
        //更新组织架构集合
        yield put({ type: "departmentlist", payload: { info } })
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },

    //岗位授权页面权限列表
    *AuthorizationList({ payload, callBack }, { put, call }) {
      // const {  selectParam } = yield select(_ => _[`${moduleName}_organization_manager`])
      const { result, body } = yield call(services.AuthorizationList, { param: payload })
      const { list } = body
      if (result.code === "success") {
        if (callBack) callBack({ checkedKeys: ["0-0-0-0"] })
        //更新组织架构集合
        yield put({ type: "updateAuthorizationList", payload: list })
        yield put({ type: "updateState", payload: { checkedKeys: ["0-0-0-0"] } })
      } else {
        message.error(result.msg)
      }
    },



    //部门和部门负责人列表
    *postparamlist({ payload }, { put, call }) {
      const { result, body } = yield call(services.postparamlist, { param: payload })
      const { list } = body
      if (result.code === "success") {

        //更新组织架构集合
        yield put({ type: "updatepostparamlist", payload: list })
      } else {
        message.error(result.msg)
      }
    },
    //修改部门进去时页面查询显示默认字段
    *departmentEditDetail({ payload, callBack }, { call, put }) {
      const { result, body } = yield call(services.departmentEditDetail, { param: payload })
      const { info } = body
      if (result.code === "success") {
        //更新基本信息
        yield put({
          type: 'updateDetailInfo',
          payload: info,
        })
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },

    //单个用户基本信息根据部门查询对应负责人
    *singleuserinformation({ payload }, { put, call }) {
      const { result, body } = yield call(services.singleuserinformation, { param: { ...payload, account_id: localStorage.getItem('account_id') } })
      const { info } = body
      if (result.code === "success") {
        //单个用户基本信息构集合
        yield put({ type: "updatesingleuser", payload: info })
      } else {
        message.error(result.msg)
      }
    },

    //部门负责人查询
    *departmentheadlist({ payload }, { put, call }) {
      const { result, body } = yield call(services.departmentheadlist, { param: payload })
      const { list } = body
      if (result.code === "success") {

        //更新组织架构集合
        yield put({ type: "updatedepartmentheadlist", payload: list })
      } else {
        message.error(result.msg)
      }
    },

    //岗位授权保存
    *saveSettinglist({ payload }, { put, call }) {
      const { result, body } = yield call(services.saveSettinglist, { param: payload })
      const { list } = body
      if (result.code === "success") {
        //更新组织架构集合
        yield put({ type: "updatesaveSettinglist", payload: list })
      } else {
        message.error(result.msg)
      }
    },


    *createProduct({ payload, callBack }, { call }) {
      const { result } = yield call(services.createProduct, { param: payload })
      if (result.code === "success") {

        message.success(result.msg)
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },


    //修改部门提交
    *editDepartment({ payload, callBack }, { call }) {
      const { result } = yield call(services.editDepartment, { param: payload })
      if (result.code === "success") {

        message.success(result.msg)
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },
    //创建部门
    *createDepartment({ payload, callBack }, { call }) {
      const { result } = yield call(services.createDepartment, { param: { ...payload, account_id: localStorage.getItem('account_id') } })
      if (result.code === "success") {

        message.success(result.msg)
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },
    //创建岗位
    *createPost({ payload, callBack }, { call }) {
      const { result } = yield call(services.createPost, { param: { ...payload, account_id: localStorage.getItem('account_id') } })
      if (result.code === "success") {

        message.success(result.msg)
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },
    *editProduct({ payload, callBack }, { call }) {
      const { result } = yield call(services.editProduct, { param: payload })
      if (result.code === "success") {

        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },
    //修改岗位提交 
    *editPost({ payload, callBack }, { call }) {
      const { result } = yield call(services.editPost, { param: payload })
      if (result.code === "success") {

        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },
    *queryProductDetail({ payload }, { call, put }) {
      const { result, body } = yield call(services.queryProductDetail, { param: payload })
      const { info } = body
      if (result.code === "success") {
        //更新基本信息
        yield put({
          type: 'updateDetailInfo',
          payload: info,
        })
        //更新版本库显示字段
        const { is_repository } = info
        yield put({
          type: 'updateIsRepository',
          payload: (is_repository ? "none" : "inline"),
        })
      } else {
        message.error(result.msg)
      }
    },
    //修改岗位进去时页面查询显示默认字段
    *postEditDetail({ payload }, { call, put }) {
      const { result, body } = yield call(services.postEditDetail, { param: payload })
      const { info } = body
      if (result.code === "success") {
        //更新基本信息
        yield put({
          type: 'updateDetailInfo',
          payload: info,
        })
      } else {
        message.error(result.msg)
      }
    },
    //加入版本库
    *setProductToRepository({ payload }, { call, put }) {
      const { result } = yield call(services.setProductToRepository, { param: payload })
      if (result.code === "success") {
        //隐藏加入版本信息提示
        yield put({
          type: 'updateIsRepository',
          payload: "none",
        })
      }
    },

    //删除应用
    *deleteProduct({ payload }, { put, call }) {
      const { result } = yield call(services.deleteProduct, { param: payload })
      if (result.code === "success") {
        message.success(result.msg)
        yield put({ type: "queryList" })
        yield put({ type: "updateState", payload: { selectedRows: [] } })
      } else {
        message.error(result.msg)
      }
    },

    //获取用户信息数据(TODO)
    *queryUserInfo(action, { put, call }) {
      const { result, body } = yield call(services.queryUser)
      const { list } = body
      if (result.code === "success") {
        yield put({ type: "updateUserArr", payload: list })
      } else {
        message.error(result.msg)
      }
    },

    //查询团队列表信息
    *queryProductTeam(payload, { put, call, select }) {
      const { pagein } = yield select(_ => _[`${moduleName}_products_manager`])
      const { result, body } = yield call(services.queryProductTeam, { pagein, param: payload })
      const { pageout, list } = body
      if (result.code === "success") {
        yield put({ type: "updateState", payload: { total: pageout.rowcountall, teamList: list } })
      } else {
        message.error(result.msg)
      }
    },

    *addProductTeam({ payload, callBack }, { call }) {
      const { result } = yield call(services.addProductTeam, { param: payload })
      if (result.code === "success") {
        message.success(result.msg)
        if (callBack) callBack()
      } else {
        message.error(result.msg)
      }
    },

    *editProductTeam({ payload }, { call }) {
      const { result } = yield call(services.editProductTeam, { param: payload })
      if (result.code === "success") {
        message.success(result.msg)
      } else {
        message.error(result.msg)
      }
    },

    *removeProductTeam({ payload }, { call, put }) {
      const { result } = yield call(services.removeProductTeam, { param: payload })
      if (result.code === "success") {
        message.success(result.msg)
        yield put({
          type: 'queryProductTeam',
        })
      } else {
        message.error(result.msg)
      }
    },

    /************新改动*********/



    //  //应用列表查询接口
    //  *queryFilterWrapFirst(action, { put, call }) {
    //   const { result, body } = yield call(services.queryFilterWarpFirst, { param: {} })
    //   const { info } = body
    //   if (result.code === "success") {
    //     yield put({ type: "updateState", payload: { FirstList: info } })
    //   } else {
    //     message.error(result.msg)
    //   }
    // },

    //岗位授权顶部应用名称
    //
    *applicationName({ payload }, { put, call }) {
      const { result, body } = yield call(services.applicationName, { param: payload })
      const { list } = body
      if (result.code === "success") {
        message.success(result.msg)
        yield put({ type: "updateState", payload: { FirstList: list } })
      } else {
        message.error(result.msg)
      }
    },

  },

  //页面重新渲染
  reducers: {
    //更新条件查询参数
    updateParam(state, { payload }) {
      return {
        ...state, //旧数据
        param: {  //新数据(更新参数信息)
          ...state.param,
          ...params,
          ...payload,
        },
      }
    },

    //更新选择性搜索参数
    updateSelectParam(state, { payload }) {
      return {
        ...state,
        selectParam: {
          ...payload,
        },
      }
    },

    updateDetailInfo(state, { payload }) {
      return {
        ...state,
        detailInfo: {
          ...payload,
        },
      }
    },

    updateIsRepository(state, { payload }) {
      return {
        ...state,
        isRepository: payload,
      }
    },

    updateUserArr(state, { payload }) {
      return {
        ...state,
        userArr: payload,
      }
    },
    updateUserArr1(state, { payload }) {
      return {
        ...state,
        nowdata: payload,
      }
    },


    // //应用列表
    // updateState(state, { payload }) {
    //   return {
    //     ...state,
    //     FirstList: payload,
    //   }
    // }, 

    //用户组织列表
    updateorganizationlist(state, { payload }) {
      return {
        ...state,
        organizationlist: payload,
      }
    },
    //部门和部门负责人列表
    updatepostparamlist(state, { payload }) {
      return {
        ...state,
        postparamlist: payload,
      }
    },

    //部门负责人任更新

    updatedepartmentheadlist(state, { payload }) {
      return {
        ...state,
        postHeadlist: payload,
      }
    },
    //用户权限列表
    updateAuthorizationList(state, { payload }) {
      return {
        ...state,
        authorizationlist: payload,
      }
    },



    //更新部门集合
    departmentlist(state, { payload }) {
      return {
        ...state, //旧数据
        departmentlist: payload.info,
      }
    },

    // 
    updateEditPost(state, { payload }) {
      return {
        ...state,
        eidtPost: {
          ...state.eidtPost,
          ...payload,
        },
      }
    },


    //更新单个信息查询负责人列表
    updatesingleuser(state, { payload }) {
      return {
        ...state, //旧数据
        singleuser: {  //新数据(更新参数信息)
          ...payload,
        },
      }
    },


  },


})