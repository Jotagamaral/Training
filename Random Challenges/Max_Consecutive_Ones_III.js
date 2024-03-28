// Given a binary array nums and an integer k, return the maximum number of 
// consecutive 1's in the array if you can flip at most k 0's.

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,'1,1,1,1,1,'1]

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,'1,'1,1,1,1,'1,1,1,0,0,0,1,1,1,1]

var longestOnes = function(nums, k) {
    let result = 0, l = 0
    for (let i = 0; i < nums.length; i++) {
        k = nums[i] == 0 ? k -= 1 : k
        if (k < 0) {
            k = nums[l] == 0 ? k += 1 : k
            l++
        }
        result = Math.max((i - l + 1), result)
    }
    return result
    
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([0,0,0,1], 2))
