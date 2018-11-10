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
          "id": "101",
          "pid": "",
          "name": "测试机构01",
          "extId": "123456789",
          "extName": "超级管理员",
          "children": [
              {
                  "id": "1909ad421eaf41fdb28868bb0512df3f",
                  "pid": "101",
                  "name": "测试机构01-01",
                  "extId": "",
                  "extName": "测试管理员1",
                  "children": [
                      {
                          "id": "cd72fba138a84e249ffeaf0d66204e9a",
                          "pid": "1909ad421eaf41fdb28868bb0512df3f",
                          "name": "测试机构",
                          "children": [],
                          "extId": "",
                          "extName": "",
                       
                      },
                      {
                          "id": "2cd5f00c71de4ff3b00c000c8c6e4324",
                          "pid": "1909ad421eaf41fdb28868bb0512df3f",
                          "name": "测试机构22",
                          "children": [
                              {
                                  "id": "8da1c02c0a5445a3ae00fff670a8a16e",
                                  "pid": "2cd5f00c71de4ff3b00c000c8c6e4324",
                                  "name": "测试机构HEaD",
                                  "children": [],
                                  "extId": "123456",
                                  "extName": "",
                                
                              },
                              {
                                  "id": "58080d0cb457431d8f10b7b252e8b80d",
                                  "pid": "2cd5f00c71de4ff3b00c000c8c6e4324",
                                  "name": "测试机构3",
                                  "children": [],
                                  "extId": "",
                                  "extName": "",
                                  
                              },
                              {
                                  "id": "8d73a9590a984f3cb631107436671f27",
                                  "pid": "2cd5f00c71de4ff3b00c000c8c6e4324",
                                  "name": "测试机构4",
                                  "children": [],
                                  "extId": "",
                                  "extName": "",
                                  
                              },
                              {
                                  "id": "95519e79600c47699019cfab8c05066f",
                                  "pid": "2cd5f00c71de4ff3b00c000c8c6e4324",
                                  "name": "测试机构5",
                                  "children": [],
                                  "extId": "",
                                  "extName": "",
                                 
                              },
                          ],
                          "extId": "123",
                          "extName": "测试管理员2",
                      },
                  ],
               
              },
          ],
      
      },
  ],
  },
})

module.exports = {
  [`GET ${apiPrefix}/user-manager/organizationlist`](req, res) {
    res.status(200).json(database)
  },
}