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
      "user_id":"1",
      "user_name": "总管理员",
      "user_sex": "0",
      "phone_no": "13888888888",
      "user_birthday": "2018-08-08",
      "email": "xxx@yuanqitech.com",
      "org_name": "产品研发部",
    }, {
      "user_id":"2",
      "user_name": "张三",
      "user_sex": "0",
      "phone_no": "13888888888",
      "user_birthday": "2018-08-08",
      "email": "xxx@yuanqitech.com",
      "org_name": "产品研发部",
    },{
      "user_id":"3",
      "user_name": "李四",
      "user_sex": "1",
      "phone_no": "13888888888",
      "user_birthday": "2018-08-08",
      "email": "xxx@yuanqitech.com",
      "org_name": "产品研发部",
    },{
      "user_id":"4",
      "user_name": "王呵呵",
      "user_sex": "1",
      "phone_no": "13888888888",
      "user_birthday": "2018-08-08",
      "email": "xxx@yuanqitech.com",
      "org_name": "产品研发部",
    }],
  },
})

module.exports = {
  [`GET ${apiPrefix}/user-manager/list`] (req, res) {
    res.status(200).json(database)
  },
}