/*
// 实现二叉树非递归的后序遍历：
    1
   / \
  2   3
 / \   \
4   5   6
    /
   7
后序遍历：=> [4,7,5,2,6,3,1]
*/

//结点类
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const node7 = new TreeNode(7)
const node4 = new TreeNode(4)
// const node4 = new TreeNode(4, new TreeNode(9), new TreeNode(10))
const node6 = new TreeNode(6)
const node5 = new TreeNode(5, node7)
const node2 = new TreeNode(2, node4, node5)
const node3 = new TreeNode(3, null, node6)
// const node3 = new TreeNode(3, new TreeNode(8), node6)
const rootNode = new TreeNode(1, node2, node3)
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 function postOrderTraversal(root) {
    if(root==null) return [];
    let nodes =save(root);
    let res =[];
    console.log(save);
    for(let i=nodes.length-1;i>=0;i--){
        res.push(nodes[i].val);
    }
    return res;
}

function save(root){
    if(root==null) return [];
    let res =[];
    res.push(root);
    let size  = res.length;
    for(let i=0;)
    if(root.left!==null){
        res.push(left);
        save(root.left);
    }
    if(root.right!==null){
        res.push(right);
        save(root.right);
    }
    return res;
}

const res = postOrderTraversal(rootNode);
console.log(res);