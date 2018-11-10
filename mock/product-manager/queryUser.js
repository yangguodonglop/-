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
      "rowcountall": 2,
      "pagecountall": 1,
      "currentpagecount": 1,
    },
    "list": [{
      "user_id": "UID_1",
      "user_name": "余冬",
    }, {
      "user_id": "UID_2",
      "user_name": "袁俊明",
    }, {
      "user_id": "UID_3",
      "user_name": "李天将",
    }, {
      "user_id": "UID_4",
      "user_name": "赵成",
    }, {
      "user_id": "UID_5",
      "user_name": "詹姆斯",
    }, {
      "user_id": "UID_6",
      "user_name": "KOBE",
    }],
  },
})

module.exports = {
  [`GET ${apiPrefix}/product-manager/queryUser`](req, res) {
    res.status(200).json(database)
  },
}