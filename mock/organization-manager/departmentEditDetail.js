const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
      "org_id" : "33333333333333333333",
      "org_name" : "测试机构01-01",
      "parent_org_id" : "333333333333333333333",
      "org_head" : "22222222222222222222222222",
      "create_user" : "lisd",
      "create_time" : "2017‐12‐06 07:17:09",
      "modify_user" : "lisd",
      "modify_time" : "2017‐12‐06 07:17:09",
      "input_code":"",
      "order_num":"",
      "enabled_state":1,
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/departmentEditDetail`](req, res) {
    res.status(200).json(database)
  },
}