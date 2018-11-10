const { config } = require('../common')
const { apiPrefix } = config

let database = {
  "result": {
    "code": "success",
    "msg": "执行成功！",
  },
  "body": {
    "info": [
        {
          title:'产品研发部',
          key:'0',
          disableCheckbox:true,
          children:[
            {
              title:'研发一部',
              key:'0-0',
              disableCheckbox:false,
              children:[
                {
                  title:'一部管理员',
                  key:'0-0-0',
                  disableCheckbox:false,
                },
                {
                  title:'一部人员1',
                  key:'0-0-1',
                  disableCheckbox:false,
                },
                {
                  title:'一部人员2',
                  key:'0-0-2',
                  disableCheckbox:false,
                },
              ],
            },
            {
              title:'研发二部',
              key:'0-1',
              disableCheckbox:true,
              children:[
                {
                  title:'二部管理员',
                  key:'0-1-0',
                  disableCheckbox:false,
                },
                {
                  title:'二部人员1',
                  key:'0-1-1',
                  disableCheckbox:false,
                },
                {
                  title:'二部人员2',
                  key:'0-1-2',
                  disableCheckbox:false,
                },
              ],
            },
            {
              title:'研发三部',
              key:'0-2',
              disableCheckbox:true,
              children:[
                {
                  title:'三部管理员',
                  key:'0-2-0',
                  disableCheckbox:false,
                },
                {
                  title:'三部人员1',
                  key:'0-2-1',
                  disableCheckbox:false,
                },
                {
                  title:'三部人员2',
                  key:'0-2-2',
                  disableCheckbox:false,
                },
              ],
            },
          ],
        },
      ],
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/SelectRolelist`] (req, res) {
    res.status(200).json(database)
  },
}