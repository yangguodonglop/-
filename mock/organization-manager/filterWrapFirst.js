const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "查询成功！",
  },
  "body": {
    "info": [{
        product_type: "all",
        text: "接口映射服务",
        count: 24,
      }, {
        product_type: "a",
        text: "统一支付平台",
        count: 0,
      }, {
        product_type: "b",
        text: "自主服务系统",
        count: 12,
      }, {
        product_type: "c",
        text: "掌上医院",
        count: 20,
      }],
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/filterWrapFirst`] (req, res) {
    res.status(200).json(database)
  },
}