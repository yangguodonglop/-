const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
 

    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/editUser`] (req, res) {
    res.status(200).json(database)
  },
}