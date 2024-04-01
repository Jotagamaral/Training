// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//* Solution 1: HashMap | Time complexity: O(s + t) | Memory: O(s + t)
var isAnagram = function(s, t) {

    if (s.length != t.length) return false

    mapS = new Map()
    mapT = new Map()

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1)
        mapT.set(t[i], (mapT.get(t[i]) || 0) + 1)
    }
    for (const [char, count] of mapS.entries()) {
        if (mapT.get(char) !== count) return false
    }
    return true
    
};

//* Solution 2: Sorting | Time complexity: O(depends ?) | Memory: O(depends ?)

var isAnagram = function(s, t) {
return s.split('').sort().join('') == t.split('').sort().join('')

};


console.log(isAnagram("anagram","nagaram"))