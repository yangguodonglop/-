const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
      "user_id": "sxsadsadsadas23",
      "user_name": "admin",
      "user_code": "300",
      "user_sex": "源启科技股份有限公司",
      "phone_no": "15951813234",
      "org_id": "10",
      "org_name": "产品经理",
      "user_birthday": "2018-08-09",
      "user_des": "13254874514",
      "role_id": "1001",
      "user_alias": "admin史蒂夫",
      "email": "super",
      "create_user": "super",
      "create_time": "2018-08-09 17:00",
      "modify_user": "李四",
      "modify_time": "2018-08-09 17:00",
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/baseInfoUser`](req, res) {
    res.status(200).json(database)
  },
}