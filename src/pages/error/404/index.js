import React from 'react'
import { Icon } from 'antd'
import { GlobalComponents } from 'components'
import styles from './404.less'

const { YQPage } = GlobalComponents

const Error = () => (<YQPage inner>
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>404 Not Found</h1>
  </div>
</YQPage>)

export default Error
