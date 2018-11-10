const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "查询成功！",
  },
  "body": {
    "list": [{
      "product_id":"id_001",
      "product_code":"code_001",
      "enterprise_id":"id_001",
      "product_name":"接口映射服务",
      "product_type":"a",
      }, {
        "product_id":"id_002",
      "product_code":"code_002",
      "enterprise_id":"id_002",
      "product_name":"统一支付平台",
      "product_type":"b",
      }, {
        "product_id":"id_003",
      "product_code":"code_003",
      "enterprise_id":"id_003",
      "product_name":"自助服务系统",
      "product_type":"c",
      }, {
        "product_id":"id_004",
      "product_code":"code_004",
      "enterprise_id":"id_004",
      "product_name":"掌上医院",
      "product_type":"d",
      }],
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/applicationName`] (req, res) {
    res.status(200).json(database)
  },
}