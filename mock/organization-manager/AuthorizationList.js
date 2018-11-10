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
    // "list":[{
    //   title: '0-0',
    //   key: '0-0',
    //   children: [{
    //     title: '0-0-0',
    //     key: '0-0-0',
    //     children: [
    //       { title: '0-0-0-0', key: '0-0-0-0' },
    //       { title: '0-0-0-1', key: '0-0-0-1' },
    //       { title: '0-0-0-2', key: '0-0-0-2' },
    //     ],
    //   }, {
    //     title: '0-0-1',
    //     key: '0-0-1',
    //     children: [
    //       { title: '0-0-1-0', key: '0-0-1-0' },
    //       { title: '0-0-1-1', key: '0-0-1-1' },
    //       { title: '0-0-1-2', key: '0-0-1-2' },
    //     ],
    //   }, {
    //     title: '0-0-2',
    //     key: '0-0-2',
    //   }],
    // }, {
    //   title: '0-1',
    //   key: '0-1',
    //   children: [
    //     { title: '0-1-0-0', key: '0-1-0-0' },
    //     { title: '0-1-0-1', key: '0-1-0-1' },
    //     { title: '0-1-0-2', key: '0-1-0-2' },
    //   ],
    // }, {
    //   title: '0-2',
    //   key: '0-2',
    // }],
    "list": [
      {
        "id": "1",
        "key": "1",
        "value": "1",
        "title": "菜单1",
        "has_own": "",
        "children": [
          {
            "id": "1-1",
            "key": "1-1",
            "value": "1-1",
            "title": "菜单1-1",
            "has_own": "",
            "children": [

            ],
            "oper_list": [
              {
                "id": "1-1-1",
                "key": "1-1-1",
                "value": "1-1-1",
                "title": "菜单1-1-1",
                "has_own": "",
              },
              {
                "id": "1-1-2",
                "key": "1-1-2",
                "value": "1-1-2",
                "title": "菜单1-1-2",
                "has_own": "",
              },
            ],
          },
          {
            "id": "1-2",
            "key": "1-2",
            "value": "1-2",
            "title": " 菜单1-2",
            "has_own": "1-2",
            "children": [
            ],
            "oper_list": [
              {
                "id": "1-2-1",
                "key": "1-2-1",
                "value": "1-2-1",
                "title": "菜单1-2-1",
                "has_own": "",
              },
              {
                "id": "1-2-2",
                "key": "1-2-2",
                "value": "1-2-2",
                "title": "菜单1-2-2",
                "has_own": "",
              },
            ],
          },
        ],
        "oper_list": [

        ],
      },
      {
        "id": "2",
        "key": "2",
        "value": "2",
        "title": "菜单2",
        "has_own": "",
        "children": [
          {
            "id": "2-1",
            "key": "2-1",
            "value": "2-1",
            "title": "菜单2-1",
            "has_own": "",
            "children": [

            ],
            "oper_list": [
              {
                "id": "2-1-1",
                "key": "2-1-1",
                "value": "2-1-1",
                "title": "菜单2-1-1",
                "has_own": "",
              },
              {
                "id": "2-1-2",
                "key": "2-1-2",
                "value": "2-1-2",
                "title": "菜单2-1-2",
                "has_own": "",
              },
            ],
          },
          {
            "id": "2-2",
            "key": "2-2",
            "value": "2-2",
            "title": "菜单2-2",
            "has_own": "",
            "children": [

            ],
            "oper_list": [
              {
                "id": "2-2-1",
                "key": "2-2-1",
                "value": "2-2-1",
                "title": "菜单2-2-1",
                "has_own": "",
              },
              {
                "id": "2-2-2",
                "key": "2-2-2",
                "value": "2-2-2",
                "title": "菜单2-2-2",
                "has_own": "",
              },
            ],
          },
        ],
        "oper_list": [

        ],
      },

    ],
  },
})

module.exports = {
  [`GET ${apiPrefix}/organization-manager/AuthorizationList`](req, res) {
    res.status(200).json(database)
  },
}