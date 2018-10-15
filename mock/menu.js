const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '0',
    name: 'UI Element',
    icon: 'camera-o',
  },
  {
    id: '0_1',
    mpid: '0',
    name: 'editor',
    icon: 'edit',
    link_type: '1',
    link_to: '/UIElement/editor',
  },
  {
    id: '0_2',
    mpid: '0',
    name: 'layer (Function)',
    icon: 'credit-card',
    link_type: '1',
    link_to: '/UIElement/layer',
  },
  {
    id: '1',
    name: '增删改查demo',
    icon: 'setting',
    link_type: '1',
    link_to: '/demo/statecode',
  },
  // {
  //   id: '2',
  //   name: '假装另一个项目',
  //   icon: 'setting',
  //   link_type: '2',
  //   link_to: 'http://localhost:8000/',
  // },
  {
    id: '3',
    icon: 'setting',
    name: '外联基础服务',
  },
  {
    id: '3_1',
    mpid: '3',
    name: 'API管理服务',
    icon: 'setting',
    link_type: '0',
  },
  {
    id: '3_2',
    mpid: '3',
    name: 'API全局服务',
    icon: 'setting',
    link_type: '0',
  },
]

module.exports = {
  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
