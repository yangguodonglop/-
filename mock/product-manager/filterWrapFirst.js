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
        text: "全部",
        count: 24,
      }, {
        product_type: "a",
        text: "服务类",
        count: 0,
      }, {
        product_type: "b",
        text: "应用类",
        count: 12,
      }, {
        product_type: "c",
        text: "组件类",
        count: 20,
      }],
  },
}

module.exports = {
  [`GET ${apiPrefix}/product-manager/filterWrapFirst`] (req, res) {
    res.status(200).json(database)
  },
}