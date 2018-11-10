const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": 
     {
      "role_id" : "434242342343243432432",
      "role_name" : "admin1",
      "org_id" : "434242342343243432432",
      "org_name" : "源启科技股份有限公司",
      "enabled_state" : 0,
      "create_user" : "lisd",
      "create_time" : "2017‐12‐06 07:17:09",
      "modify_user" : "lisd",
      "modify_time" : "2017‐12‐06 07:17:09",
      },
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/postEditDetail`](req, res) {
    res.status(200).json(database)
  },
}