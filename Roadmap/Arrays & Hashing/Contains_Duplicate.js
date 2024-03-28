// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//* Solution 1: Brute Force | Time complexity: O(n^2) | Memory: O(1)

var containsDuplicate = function(nums) {
   count = 0
    for (let i = 0; i <= nums.length; i++ ){
       for (let j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j]) count += 1
        if (count >= 2) return true
       }
    }
    return false   
};


//* Solution 2: Sorting Array | Time complexity: O(n log(n)) | Memory: O(1)

var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (i = 0; i <= nums.length; i++ ){
       if(nums[i] == nums[i+1] && nums[i+1] != null) return true
    }
    return false   
};

//* Solution 3: Hashing | Time complexity: O(n) | Memory: O(n)

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};