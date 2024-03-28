// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only
// 1's in the resulting array. Return 0 if there is no such subarray.

// Input: nums = [1,1,0,1]
// Output: 3

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5

// Input: nums = [1,1,1]
// Output: 2

var longestSubarray = function(nums) {
    let result = 0, l = 0, num_zero = 1
    for (let i = 0; i < nums.length; i++) {
        num_zero = nums[i] == 0 ? num_zero -= 1 : num_zero 
        if (num_zero < 0) {  
            num_zero = nums[l] == 0 ? num_zero += 1: num_zero 
            l++
        }   
        result = Math.max((i - l), result)
    }
    return result
};

console.log(longestSubarray([1,1,0,1]))
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
console.log(longestSubarray([1,1,1]))
