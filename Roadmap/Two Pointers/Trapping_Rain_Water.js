// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height.length) return 0 
    let left = 0, rigth = height.length - 1, leftMax = height[left], rigthMax = height[rigth], res = 0
    while (left < rigth) {
        if (leftMax < rigthMax) {
            left++
            leftMax = Math.max(leftMax, height[left])
            res += leftMax - height[left]
        } else {
            rigth--
            rigthMax = Math.max(rigthMax, height[rigth])
            res += rigthMax - height[rigth]
        }
    }
    return res
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)