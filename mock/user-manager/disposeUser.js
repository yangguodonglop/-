const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {},
  },
}

module.exports = {
  [`GET ${apiPrefix}/demand-manager/disposeDemand`] (req, res) {
    res.status(200).json(database)
  },
}