const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
      "user_id": "2951231500518",
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/createLoginaccount`] (req, res) {
    res.status(200).json(database)
  },
}