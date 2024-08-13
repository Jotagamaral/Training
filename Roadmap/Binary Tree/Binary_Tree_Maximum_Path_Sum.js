// Given the root of a non-empty binary tree, return the maximum path sum of any non-empty path.

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can not appear in the sequence more than once. The path does not necessarily need to include the root.

// The path sum of a path is the sum of the node's values in the path.

// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.

// Example 2:
// Input: root = [-15,10,20,null,null,15,5,-5]
// Output: 40
// Explanation: The path is 15 -> 20 -> 5 with a sum of 15 + 20 + 5 = 40.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {

        res = [root.val]

        function dfs(root) {
            if (!root) return 0 

            leftmax = dfs(root.left)
            rightmax = dfs(root.right)
            leftmax = Math.max(leftmax,0)
            rightmax = Math.max(rightmax,0)

            res[0] = Math.max(res[0], root.val + leftmax + rightmax)

            return root.val + Math.max(leftmax, rightmax)
        }

        dfs(root)
        return res[0]
    }
}
