// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

//* Solution : Hashmap | Time complexity: O(n) | Memory: O(n)

var topKFrequent = function(nums, k) {
    count = new Map()
    freq = Array(nums.length + 1).fill().map(() => [])
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1)
    }
    count.forEach((value, key) => {
        freq[value].push(key)
    });
    res = []
    for (let i = freq.length - 1; i > 0; i--) {
        for (let number of freq[i]) {
            res.push(number)
            if (res.length == k) return res
        }
    }
};

console.log(topKFrequent([1,1,1,2,2,3], 2))