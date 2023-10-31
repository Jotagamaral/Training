// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to
// the left of the index is equal to the sum of all the numbers strictly to
// the index's right. If the index is on the left edge of the array, then the
// left sum is 0 because there are no elements to the left. This also applies
// to the right edge of the array. Return the leftmost pivot index. If no 
// such index exists, return -1.

// Input: nums = [1,7,3,6,5,6]
// Output: 3

// Input: nums = [1,2,3]
// Output: -1

// Input: nums = [2,1,-1]
// Output: 0

var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0)
    let left = 0, rigth = 0, result = -1
    for (let i = 0; i < nums.length; i++) {
        rigth = total - left - nums[i]
        if (rigth == left) {
            result = i
            break
        }
        left += nums[i]
    }
    return result
};

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))
console.log(pivotIndex([-1,-1,0,0,-1,-1]))
