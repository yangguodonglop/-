const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: "01",
    name: "平台管理",
    path: "https://ant.design/index-cn",
  },
  {
    id: "02",
    name: "产品与服务",
    path: "https://dvajs.com/",
  },
  {
    id: "03",
    name: "就诊服务平台",
    path: "https://umijs.org/",
  },
  {
    id: "04",
    name: "统一支付平台",
    path: "https://doc.react-china.org/",
  },
  {
    id: "05",
    name: "自助服务系统",
    path: "https://www.youtube.com/",
  },
]

module.exports = {
  [`GET ${apiPrefix}/headermenus`] (req, res) {
    res.status(200).json(database)
  },
}
