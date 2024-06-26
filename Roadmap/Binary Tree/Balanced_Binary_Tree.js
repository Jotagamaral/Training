// Given a binary tree, determine if it is height-balanced
 
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function dfs(root) {
        if (!root) return [true, 0];

        [left, right] = [dfs(root.left), dfs(root.right)];
        balance = (left[0] && right[0] && Math.abs(left[1] - right[1]) <=1);

        return[balance, 1 + Math.max(left[1], right[1])];
    };
    return dfs(root)[0]
};