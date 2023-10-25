// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average 
// value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000

// Input: nums = [5], k = 1
// Output: 5.00000

var findMaxAverage = function(nums, k) {
    sum = -Infinity
    for (let i = 0; i <= nums.length - k; i++) {
        list = nums.slice(i, i+ k)
        sum = Math.max((list.reduce((a, b) => a + b) / k), sum)  
    }
    return sum
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([0,1,1,3,3], 4))
console.log(findMaxAverage([-1], 1))
