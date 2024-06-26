// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//* Solution : Hashmap | Time complexity: O(n) | Memory: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    count = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (count.has(target - nums[i])) return [count.get(target - nums[i]), i]
        count.set(nums[i], i)
    }
};

console.log(twoSum([2,7,11,15], 9))