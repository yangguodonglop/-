import Redirect from 'umi/redirect'
import { config } from 'setting'
const { defaultPage } = config || '/overview'

export default () => <Redirect to={defaultPage} />
