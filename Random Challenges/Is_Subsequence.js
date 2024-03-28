//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//A subsequence of a string is a new string that is formed from the original string by 
//deleting some (can be none) of the characters without disturbing the relative positions 
//of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function(s, t) {
    i = 0
    t.split('').forEach(element => {
        i = element == s.split('')[i] ? (i+1) : i 
    });
    return i == s.split('').length ? true : false
};

console.log(isSubsequence("abc","ahbgdc"))
console.log(isSubsequence("axc","ahbgdc"))
