import React from "react"
import styles from './components/index.less'
import Treenodefrom from './components/indextree'
import Demo1 from './components/treedowndemo'



class Indexfrom extends React.Component{
    render(){
        return(
            <div className={styles.style_con}>
            <Treenodefrom/>
            <Demo1/>
            </div>
        )
    }
}

export default Indexfrom