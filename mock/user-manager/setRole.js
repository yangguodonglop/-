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
            title: '产品研发部',
            value: '0-0',
            key: '0-0',
            children: [{
              title: '研发一部',
              value: '0-0-1',
              key: '0-0-1',
              children:[{
                title:'一部管理员',
                value:'0-0-1-0',
                key:'0-0-1-0',
              },{
                title:'一部人员',
                value:'0-0-1-1',
                key:'0-0-1-1', 
              },{
                title:'一部文员',
                value:'0-0-1-2',
                key:'0-0-1-2', 
              }],
            }, {
              title: '研发二部',
              value: '0-0-2',
              key: '0-0-2',
              children:[{
                title:'二部管理员',
                value:'0-0-2-0',
                key:'0-0-2-0',
              },{
                title:'二部人员',
                value:'0-0-2-1',
                key:'0-0-2-1', 
              }],
            }],
          },
    ],
  },
}

module.exports = {
  [`GET ${apiPrefix}/user-manager/setRole`] (req, res) {
    res.status(200).json(database)
  },
}