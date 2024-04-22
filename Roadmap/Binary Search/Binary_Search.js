// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

//* Solution : Binary Search | Time complexity: O(log n) | Memory: O(1)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1

    while (left <= right) {

       let middle = left + Math.floor((right - left) / 2) 

       if (nums[middle] > target) right = middle - 1
       else if (nums[middle] < target) left = middle + 1
       else return middle
    }
    return -1
};

console.log(search([-1,0,3,5,9,12],9), 4)
console.log(search([-1,0,3,5,9,12], 13), -1)