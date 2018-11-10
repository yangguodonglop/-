import React from 'react'
import styles from "./index.less"
 import {connect} from "dva"
//  import constant from '../../constant'

// const { moduleName } = constant
class Postinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          dataId: "",
        }
      } 

    render() {
        // const data = [
        //     {
        //       name: '部门',
        //       postname:'产品研发部',
        //       key:'1',
              
        //     },{
        //      name: '部门负责人',
        //       postname:'李四',
        //       key:'2',
        //     }] 
            // const data1 = [
            //     {
            //       name: '李四',
            //       key:'2',
            //     }]      
     return (
      <div className={styles.department_con}>
          {/* <div className={styles.department_l}>
            <span className={styles.department_span_l}>部门1：</span><span className={styles.department_span_l}>产品研发部</span>
          </div>
          <div className={styles.department_l}>
            <span className={styles.department_span_l}>部门负责人：</span><span className={styles.department_span_l}>李四</span>
          </div> */}
          {this.props.data.length>0
            ? this.props.data.map((item)=>{
                return(
                    <div  className={styles.department_l} key={item.key}>
                        <span className={styles.department_span_l }>部门：{item.name}</span>
                        <span className={styles.department_span_l} style={{marginLeft:'40px'}}>部门负责人：{item.postname}</span>
                    </div> 
                )
            })
        :null}
        </div>
     )
    }
   }

   function mapStateToProps(state) {
    const { powermop_permit_manager_web_organization_organization_manager, loading } = state
    return {
      loading,
      current_state: powermop_permit_manager_web_organization_organization_manager,
    }
  }
  
  export default connect(mapStateToProps)(Postinfo)