// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the 
// array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

// Input: nums = [1,2,3,4], k = 5
// Output: 2

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1

var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b)
    count = 0, i = 0, j = nums.length - 1
    while (i < j) {
        if (nums[i] + nums[j] == k) {
            count++
            i++
            j--
            continue
        }
        nums[i] + nums[j] > k ? j-- : i++
    }
    return count
};
