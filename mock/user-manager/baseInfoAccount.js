const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
      "account_id": "admin",
      "role_ids":"6666666",
      "user_alias": "管理员",
      "user_state": "normal",
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/baseInfoAccount`] (req, res) {
    res.status(200).json(database)
  },
}