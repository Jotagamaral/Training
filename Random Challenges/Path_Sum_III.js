// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Example 1:

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3

// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    this.val = 0
    function helper(node, curr){
        if (node == null) return
        helper(node.left, curr + node.val)
        helper(node.right, curr + node.val)

        if (curr + node.val == targetSum){
            this.val += 1
        }
    }
    function dfs(node){
        if (node == null) return 
        helper(node,0)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return this.val
};