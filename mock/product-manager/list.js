import mockjs from 'mockjs'

const { config } = require('../common')
const { apiPrefix } = config

let database = mockjs.mock({
  "result": {
    "code": "success",
    "msg": "查询成功！",
  },
  "body": {
    "pageout": {
      "currentpagenum": 1,
      "rowcountall": 50,
      "pagecountall": 1,
      "currentpagecount": 1,
    },
    "list": [{
      "created_time": "2018-08-20 00:00:01",
      "updated_time": "2018-08-21 00:00:59",
      "product_code": "PayService",
      "product_name": "统一支付平台222222",
      "created_by": "Orgine",
      "is_repository": "false",
      "product_type": "component",
      "product_id": "24354353454354",
      "updated_by": "Orgine",
      "order_num": 0,
      "product_structure": "B/S",
      "remarks": "remarks-24354353454354",
      "run_version_no": "1.0.058",
      "picture_url": "",
    }, {
      "created_time": "2018-08-20 00:00:01",
      "updated_time": "2018-08-21 00:00:59",
      "product_code": "PaxIndexService",
      "product_name": "主索引服务平台2222222",
      "created_by": "Admin",
      "is_repository": "false",
      "product_type": "component",
      "product_id": "2435435345",
      "updated_by": "Admin",
      "order_num": 0,
      "product_structure": "B/S",
      "remarks": "remarks-24354353454354",
      "run_version_no": "1.0.058",
      "picture_url": "",
    }, {
      "created_time": "2018-08-20 00:00:01",
      "updated_time": "2018-08-21 00:00:59",
      "product_code": "PowerReRegister",
      "product_name": "多元化预约系统",
      "created_by": "Admin",
      "is_repository": "false",
      "product_type": "component",
      "product_id": "24354353435",
      "updated_by": "Admin",
      "order_num": 0,
      "product_structure": "C/S",
      "remarks": "remarks-24354353454354",
      "run_version_no": "1.0.058",
      "picture_url": "",
    }, {
      "created_time": "2018-08-20 00:00:01",
      "updated_time": "2018-08-21 00:00:59",
      "product_code": "PowerSAMS",
      "product_name": "储值账户系统",
      "created_by": "Admin",
      "is_repository": "false",
      "product_type": "component",
      "product_id": "243543531345",
      "updated_by": "Admin",
      "order_num": 0,
      "product_structure": "C/S",
      "remarks": "remarks-24354353454354",
      "run_version_no": "1.0.058",
      "picture_url": "",
    }],
  },
})

module.exports = {
  [`GET ${apiPrefix}/product-manager/list`](req, res) {
    res.status(200).json(database)
  },
}