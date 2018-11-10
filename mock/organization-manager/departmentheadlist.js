const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "list": [{
        "user_id" : "admin",
        "user_name" : "300",
        "user_sex" : "源启科技股份有限公司",
        "user_birthday" : "0",
        "phone_no" : "10",
        "org_id" : "产品经理",
        "org_name" : "3E74A5D75E36726812B453CDB811340B",
        "email" : "13254874514",

      },
        {
            "user_id" : "admin1",
            "user_name" : "301",
            "user_sex" : "源启科技股份有限公司1",
            "user_birthday" : "0",
            "phone_no" : "10",
            "org_id" : "产品经理1",
            "org_name" : "3E74A5D75E36726812B453CDB811340B",
            "email" : "13254874514",
        },
        ],
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/departmentheadlist`](req, res) {
    res.status(200).json(database)
  },
}