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
    "list":[
        {
          name: '功能',
          key:'1',
          id:"1",
          children: [
            {
              name: '标准接口',
              key:'2',
              id:"2",
              childrenT: [
                {
                  name: '创建',
                  key:'3', 
                  id:"3",
                },
                {
                  name: '管理',
                  key:'4', 
                  id:"4",
                },
                {
                  name: '删除',
                  key:'5', 
                  id:"5",
                },
              ],
            },
            {
              name: '服务接入',
              key:'6',
              id:"6",
              childrenT:[
                {
                  name: '创建',
                  key:'7', 
                  id:"7",
                },
                {
                  name: '查看',
                  key:'8', 
                  id:"8",
                },
              ],
            },
          ],
        },
        {
          name: '供应服务',
          key:'9',
          id:"9",
          children: [
            {
              name: '厂商',
              key:'10',
              id:"10",
              childrenT: [
                {
                  name: '创建',
                  key:'11', 
                  id:"11",
                },
                {
                  name: '管理',
                  key:'12', 
                  id:"12",
                },
                {
                  name: '删除',
                  key:'13', 
                  id:"13",
                },
              ],
            },
            {
              name: '服务',
              key:'21',
              id:"21",
              childrenT:[
                {
                  name: '创建',
                  key:'22', 
                  id:"22",
                },
                {
                  name: '查看',
                  key:'23', 
                  id:"23",
                },
              ],
            },
            {
              name: '映射',
              key:'15',
              id:"15",
              childrenT:[
                {
                  name: '创建',
                  key:'16', 
                  id:"16",
                },
                {
                  name: '管理',
                  key:'17', 
                  id:"17",
                },
                {
                  name: '还原',
                  key:'18', 
                  id:"18",
                },
                {
                  name: '导入',
                  key:'19', 
                  id:"19",
                },
                {
                  name: '到处',
                  key:'20', 
                  id:"20",
                },
                
              ],
            },
          ],
        },
      
      ],
  },
})

module.exports = {
  [`GET ${apiPrefix}/organization-manager/saveSettinglist`](req, res) {
    res.status(200).json(database)
  },
}