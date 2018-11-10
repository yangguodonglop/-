const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {

      "user_name": "总管理员",
      "org_name": "产品研发部",
      "user_code": "001",
      "user_sex": "0",
      "phone_no": "13888888888",
      "user_birthday": "2018-08-08",
      "email": "xxx@yuanqitech.com",
      "user_des": "暂无",
      "account_id": "400",
      "user_pwd": "111",
      "user_pwd_again":"111",
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/editAccound`] (req, res) {
    res.status(200).json(database)
  },
}