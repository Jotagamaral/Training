// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
//* Solution : Two Pointers | Time complexity: O(n^2) | Memory: O(sort)


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        left = i + 1
        rigth = nums.length - 1
        while (left < rigth) {
            sum = nums[i] + nums[left] + nums[rigth]
            if (sum > 0) rigth--
            else if (sum < 0) left++
            else {
                res.push([nums[i], nums[left], nums[rigth]])
                left++
                while (nums[left] == nums[left - 1] && left < rigth) left++
            }
        }
    }  
    return res 
};


console.log(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2], [-1,0,1]])