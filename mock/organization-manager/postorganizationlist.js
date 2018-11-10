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
    "info":
     [{
        title: '研发中心11',
        value: '0-0',
        key: '0-0',
        children: [{
          title: '项目研发部',
          value: '1909ad421eaf41fdb28868bb0512df3f',
          key: '0-0-1',
          children:[{
            title:'研发一部',
            value:'0-0-1-0',
            key:'0-0-1-0',
          },{
            title:'研发二部',
            value:'0-0-1-1',
            key:'0-0-1-1', 
            children:[{
                title:'研发一组',
                value:'0-0-2-0-0',
                key:'0-0-2-0-0',
              },{
                title:'研发二组',
                value:'0-0-2-0-1',
                key:'0-0-2-0-1', 
              }],
          }],
        }, {
          title: '产品研发部',
          value: '0-0-2',
          key: '0-0-2',
          children:[{
            title:'产品一部',
            value:'0-0-2-0',
            key:'0-0-2-0',
          },{
            title:'产品二部',
            value:'0-0-2-1',
            key:'0-0-2-1', 
          }],
        }],
      },

    ],
  },
})

module.exports = {
  [`GET ${apiPrefix}/organization-manager/postorganizationlist`](req, res) {
    res.status(200).json(database)
  },
}