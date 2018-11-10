const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
        "user_id" : "2017‐12‐06 07:17:09",
        "user_name" : "admin",
        "user_code" : "300",
        "user_sex" : "源启科技股份有限公司",
        "phone_no" : "0",
        "org_id" : "10",
        "org_name" : "产品经理",
        "user_birthday" : "3E74A5D75E36726812B453CDB811340B",
        "user_des" : "13254874514",
        "role_id" : "1001",
        "user_alias" : "admin史蒂夫",
        "email" : "super",
        "create_user" : "super",
        "create_time" : "超级管理员",
        "modify_user" : "1",
        "modify_time" : "1",
        
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/singleuserinformation`](req, res) {
    res.status(200).json(database)
  },
}