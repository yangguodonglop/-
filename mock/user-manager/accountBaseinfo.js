import mockjs from 'mockjs'

const { config } = require('../common')
const { apiPrefix } = config

let database = mockjs.mock({
  "result": {
    "code": "success",
    "msg": "查询成功！",
  },
  "body": {
    "pageout": {
      "currentpagenum": 1,
      "rowcountall": 50,
      "pagecountall": 1,
      "currentpagecount": 1,
    },
    "list": [{
      "account_id": "admin",
      "user_alias": "管理员",
      "user_pwd": "",
      "type": "企业管理员",
      "role_ids": "研发部管理员、一部管理员",
      "user_state": "正常",
    }, {
      "account_id": "admintest",
      "user_alias": "测试账号",
      "user_pwd": "",
      "type": "系统管理员",
      "role_ids": "研发部管理员",
      "user_state": "正常",
    }],
  },
})

module.exports = {
  [`GET ${apiPrefix}/user-manager/accountlist`] (req, res) {
    res.status(200).json(database)
  },
}