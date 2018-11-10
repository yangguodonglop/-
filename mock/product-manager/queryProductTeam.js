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
        "related_id": "RID_10000000001058",
        "user_type": "1",
        "user_id": "UID_1",
        "user_name": "余冬",
        "org_name": "研发二部",
        "access_right": "2",
    },{
        "related_id": "RID_10000000001059",
        "user_type": "1",
        "user_id": "UID_2",
        "user_name": "袁俊明",
        "org_name": "研发一部",
        "access_right": "1",
    }],
  },
})

module.exports = {
  [`GET ${apiPrefix}/product-manager/queryProductTeam`](req, res) {
    res.status(200).json(database)
  },
}