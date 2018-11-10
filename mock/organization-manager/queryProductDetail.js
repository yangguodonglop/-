const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": {
      "created_time": "2018-10-01",
      "updated_time": "2018-10-01",
      "product_code": "PowerSAMS",
      "product_name": "储值账户系统",
      "created_by": "admin",
      "is_repository": false,
      "product_type": "app",
      "product_id": "24354353454352",
      "updated_by": "admin",
      "order_num": 0,
      "product_structure": "C/S",
      "remarks": "储值账户系统",
      "run_version_no": "1.0.056",
      "role_name":"666" ,
      "post_name":"李四",
    },
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/queryProductDetail`](req, res) {
    res.status(200).json(database)
  },
}