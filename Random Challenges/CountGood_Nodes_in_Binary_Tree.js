// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:

// Input: root = [3,1,4,3,null,1,5]
// Output: 4

// Example 2:

// Input: root = [3,3,null,4,2]
// Output: 3

// Example 3:

// Input: root = [1]
// Output: 1

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
 * @return {number}
 */
var goodNodes = function(root) {


    function greater(node, maxVal){

        if (node == null) return 0

        res = node.val >= maxVal ? 1 : 0
        maxVal = Math.max(maxVal, node.val)

        res += greater(node.left, maxVal)
        res += greater(node.right, maxVal)
        return res

    }

    return greater(root, root.val)
    
};