// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Input: s = "abciiidef", k = 3
// Output: 3

// Input: s = "aeiou", k = 2
// Output: 2

// Input: s = "leetcode", k = 3
// Output: 2

var maxVowels = function(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let result = 0, l = 0, count = 0
    for (let i = 0; i < s.length; i++) {
        count = vowels.includes(s[i]) ? count+=1 : count
        if ((i - l + 1) > k) {
            count = vowels.includes(s[l]) ? count-=1 : count
            l++
        }
        result = Math.max(count, result)
    }
    return result
};

console.log(mexVowels("abciiidef", 3))
console.log(mexVowels("aeiou", 2))
console.log(mexVowels("leetcode", 3))
