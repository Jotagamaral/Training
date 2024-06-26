// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

//* Solution : HashSet | Time complexity: O(n) | Memory: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    numSet = new Set(nums)
    longest = 0
    
    for (const i of nums) {
        if (!numSet.has(i - 1)) {
            length = 0
            while (numSet.has(i + length)) {
                length += 1
                longest = Math.max(length, longest)
            } 
        }
    }
    return longest
};


console.log(longestConsecutive([100,4,200,1,3,2]), 4)

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]), 9)

console.log(longestConsecutive([]), 0)