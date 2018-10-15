const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')

module.exports = () => {
  const iconURL = "'/public/antd/iconfont'"
  const themePath = path.join(__dirname, './src/themes/default.less')
  return { "@icon-url": iconURL, ...lessToJs(fs.readFileSync(themePath, 'utf8'))}
}
