import { config } from 'setting'
import { request } from 'utils'

const { api } = config
const { userLogin } = api

export function login (data) {
  return request({
    url: userLogin,
    method: 'post',
    data,
  })
}
