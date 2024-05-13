// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

//* Solution : Sliding Window | Time complexity: O(n) | Memory: O(1)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map()
    let res = 0
    let maxCount = 0
    let l = 0

    for (let r = 0; r < s.length; r++) {
        count.set(s[r], (count.get(s[r]) || 0) + 1)
        maxCount = Math.max(maxCount, count.get(s[r]))
        if ((r - l + 1) - maxCount > k) {
            count.set(s[l], count.get(s[l]) - 1)
            l++
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};


console.log(characterReplacement("ABAB", 2), 4)
console.log(characterReplacement("AABABBA", 1), 4)