import React from 'react'
import { Tree } from 'antd'

const TreeNode = Tree.TreeNode
const DirectoryTree = Tree.DirectoryTree

//import { Dropdown, Menu, Button, Icon } from "antd"
//import styles from "./ModelCheck.less"



// // class Card extends React.Component {
  
  
// //     render() {
    
// //       return (
// //         <div>
// //           <h1>6666</h1>
// //         </div>
// //       )
// //     }
// //   }






// // const DropDownItem = ({ data}) => {
// //   let renderMenuItem = (data = []) => {
// //     return data.map((item, index) => {
// //       return (
// //         <Menu.Item key={index}><a>{item}</a>
// //         </Menu.Item>
// //       )
// //     })
// //   }

// //   let generateMenu = (data = []) => {
// //     return (
// //       <Menu>
// //         {renderMenuItem(data)}
// //       </Menu>
// //     )
// //   }
  
// //   const menu = generateMenu(data)

// //   return (
// //     <span >
// //       <Dropdown overlay={menu}>
// //       <Button >
// //         {/* {(data && data.length === 0) ? 0 : data.length } {text ? "个" + text : "个元素" } */}
// //         <Icon type="caret-down" />
// //       </Button>
// //      </Dropdown>
// //     </span>
// //   )
// // }

//export default DropDownItem


// const data = [
//   {orgId: 1,
//     orgName: '标题一',
//    },
//   {orgId: 2, 
//     orgName: '标题二',
//   children:[{
//     orgId:3,
//     orgName:'标题三',
//   },{
//     orgId:4,
//     orgName:'标题四',
//   }],
// },
// ]
// export default class Resource extends Component {
//   renderTree = (data) =>{
//     console.log('树形菜单数据源', data)

//   data.map((item) => {
//       if (!item.children) {
//         return (
//           <TreeNode title={item.orgName} key={item.orgId}>
//             {this.renderTree(item.children)}
//           </TreeNode>
//         )
//       } else {
//         return (
//           <TreeNode title={item.orgName} key={item.orgId} />
//         )
//       }
//     })
//   }
//   render() {
//     const treeElement = this.renderTree(data)
//     return (
//       <div id="Home4">
//       {/* <treeElement {...data}/> */}
//       {treeElement}
//       </div>
//     )
//   }
// }


class helpList extends React.Component {
	constructor(props) {
		super(props)
    }

	onSelect = (e) => {
		console.log(e)
	  };
	
	  onExpand = () => {
		console.log('Trigger Expand')
	  };
    
    render() {
        const data = [
			{
				name: 'parent 1',

				children: [
					{
						name: 'parent 1-1',
						childrenT: [{ name: 'leaddddd' }, { name: 'leaddddd2222222' }],
					},
					{
						name: 'parent 1-2',
						childrenT: [{ name: 'leaddddd' }, { name: 'leaddddd2222222' }],
					},
					{
						name: 'parent 1-3',
						childrenT: [{ name: 'leaddddd' }, { name: 'leaddddd2222222' }],
					},
				],
			},
			{
				name: 'parent 2',
				children: [
					{
						name: 'parent 2,-1',
						childrenT: [],
					},
					{
						name: 'parent 2-2',
						childrenT: [],
					},
					{
						name: 'parent 2-3',
						childrenT: [],
					},
				],
			},
		]
        return(
            <div className="container">
			<DirectoryTree
			multiple
			defaultExpandAll
			onSelect={this.onSelect}
			onExpand={this.onExpand}
			>
                {data.length > 0
						? data.map((item) => {
								return (
									<TreeNode title={item.name} key={item.name}>
										{item.children.length > 0
											? item.children.map((flag) => {
													return (
														<TreeNode title={flag.name} key={flag.name}>
															{flag.childrenT.length > 0
																? flag.childrenT.map((list) => {
																		return <TreeNode title={list.name} key={list.name} />
																  })
																: null}
														</TreeNode>
													)
											  })
											: null}
									</TreeNode>
								)
						  })
						: null}
            </DirectoryTree>
        </div>  
        )
    }
}
export default helpList 
