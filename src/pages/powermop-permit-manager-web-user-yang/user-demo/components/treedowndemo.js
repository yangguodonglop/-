import { Tree } from 'antd'
import React from "react"

const DirectoryTree = Tree.DirectoryTree
const TreeNode = Tree.TreeNode

class Demo1 extends React.Component {
  onSelect = (e) => {
    console.log(e)
  };

  onExpand = () => {
    console.log('Trigger Expand')
  };

  render() {
    return (
      <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={this.onSelect}
        onExpand={this.onExpand}
      >
        <TreeNode title="parent 0" key="0-0">
          <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
          <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
        </TreeNode>
        <TreeNode title="parent 1" key="0-1">
          <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
          <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
        </TreeNode>
      </DirectoryTree>
    )
  }
}

export default Demo1
