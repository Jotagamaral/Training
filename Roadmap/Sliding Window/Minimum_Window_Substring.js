// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === '') return ''

    let countT = new Map(), window = new Map();

    for (const c of t) countT.set(c, 1 + (countT.get(c) || 0))

    let have = 0, need = countT.size, res = [-1,-1], resLen = Infinity, l = 0

    for (let r = 0; r < s.length; r++) {
        let c = s[r]

        window.set(c, 1 + (window.get(c) || 0))

        if (countT.has(c) && window.get(c) === countT.get(c)) have += 1
        
        while (have === need) {
            if ((r - l + 1) < resLen) {
                res = [l, r]
                resLen = (r - l + 1)
            }
            window.set(s[l], window.get(s[l]) - 1)
            if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l]) ) have -= 1
            l++
        }
    }
    return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : "" 
};






console.log(minWindow("ADOBECODEBANC","ABC"),"BANC" )