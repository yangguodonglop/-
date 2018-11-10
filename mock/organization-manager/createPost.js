const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "pageout": {
      "currentpagenum": 1,
      "rowcountall": 50,
      "pagecountall": 1,
      "currentpagecount": 1,
    },
    "list": [{
      "role_id" : "4342423423432434324321",
      "org_id" : "4342423423432434324321",
      "role_name" : "admin",
      "org_name" : "源启科技股份有限公司33333",
      "enabled_state" : 1,
      "create_user" : "lisd",
      "create_time" : "2017-12-06 07:17:09",
    }, {
      "role_id" : "4342423423432434324322",
      "org_id" : "4342423423432434324322",
      "role_name" : "admin1",
      "org_name" : "源启科技股份有限公司33333",
      "enabled_state" : 1,
      "create_user" : "lisd",
      "create_time" : "2017-12-06 07:17:09",
    }, {
      "role_id" : "4342423423432434324323",
      "org_id" : "4342423423432434324323",
      "role_name" : "admin2",
      "org_name" : "源启科技股份有限公司33333",
      "enabled_state" : 1,
      "create_user" : "lisd",
      "create_time" : "2017-12-06 07:17:09",
    }, {
      "role_id" : "4342423423432434324324",
      "org_id" : "4342423423432434324324",
      "role_name" : "admin3",
      "org_name" : "源启科技股份有限公司33333",
      "enabled_state" : 0,
      "create_user" : "lisd",
      "create_time" : "2017-12-06 07:17:09",
    }],
 
  },
}

module.exports = {
  [`GET ${apiPrefix}/organization-manager/createPost`] (req, res) {
    res.status(200).json(database)
  },
}