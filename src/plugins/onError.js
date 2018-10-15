import { message } from 'antd'

export default {
  onError (e) {
    e.preventDefault()
    // console.log(e)
    message.error(e.message)
  },
}
