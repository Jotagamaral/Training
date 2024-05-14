// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false

    let s1Count = Array(26).fill(0)
    let s2Count = Array(26).fill(0)

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    let matches = 0
    for (let j = 0; j < 26; j++) matches += (s1Count[j] == s2Count[j]) ? 1 : 0
    
    let l = 0
    for (let r = s1.length; r < s2.length; r++) {

        if (matches == 26) return true
        
        index = s2[r].charCodeAt(0) - 'a'.charCodeAt(0)
        s2Count[index] += 1

        if (s1Count[index] == s2Count[index]) matches += 1
        else if (s1Count[index] + 1 == s2Count[index]) matches -= 1

        index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0)
        s2Count[index] -= 1

        if (s1Count[index] == s2Count[index]) matches += 1
        else if (s1Count[index] - 1 == s2Count[index]) matches -= 1

        l++ 
    }
    return matches == 26

};

console.log(checkInclusion("ab","eidbaooo"), true)
console.log(checkInclusion("ab","eidboaoo"), false)