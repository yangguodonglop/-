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
      "role_id" : "434242342343243432432",
      "role_name" : "admin1",
      "org_id" : "434242342343243432432",
      "org_name" : "源启科技股份有限公司",
      "enabled_state" : "0",
      "create_user" : "lisd",
      "create_time" : "2017‐12‐06 07:17:09",
    },
      {
      "role_id" : "434242342343243432433",
      "role_name" : "admin2",
      "org_id" : "434242342343243432433",
      "org_name" : "源启科技股份有限公司",
      "enabled_state" : "1",
      "create_user" : "lisd",
      "create_time" : "2017‐12‐06 07:17:09",
      },
      ],
  },
})

module.exports = {
  [`GET ${apiPrefix}/organization-manager/list`](req, res) {
    res.status(200).json(database)
  },
}