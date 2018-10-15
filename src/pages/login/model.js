import { routerRedux } from 'dva/router'
// import { login } from './service'
import config from 'config'
const { defaultPage } = config

export default {
  namespace: 'login',

  state: {},

  effects: {
    // * login ({
    //   payload,
    // }, { put, call, select }) {
    //   const data = yield call(login, payload)
    //   const { locationQuery } = yield select(_ => _.app)
    //   if (data.success) {
    //     const { from } = locationQuery
    //     yield put({ type: 'app/query' })
    //     if (from && from !== '/login') {
    //       yield put(routerRedux.push(from))
    //     } else {
    //       yield put(routerRedux.push(defaultPage))
    //     }
    //   } else {
    //     throw data
    //   }
    // },
    * login (action, { put }) {
      yield put(routerRedux.push(defaultPage))
    },
  },
}
