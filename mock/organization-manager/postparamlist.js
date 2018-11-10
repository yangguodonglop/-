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
    "list": [
        {
          name: '产品研发部',
          postname:'张三',
          key:'1',
          
        }] ,
  },
})

module.exports = {
  [`GET ${apiPrefix}/organization-manager/postparamlist`](req, res) {
    res.status(200).json(database)
  },
}