// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

//* Solution : Two Pointers | Time complexity: O(n) | Memory: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    function codeAt(char) {
        return ('A'.charCodeAt(0) <= char.charCodeAt(0) && 'Z'.charCodeAt(0) >= char.charCodeAt(0) ||
                'a'.charCodeAt(0) <= char.charCodeAt(0) && 'z'.charCodeAt(0) >= char.charCodeAt(0) ||
                '0'.charCodeAt(0) <= char.charCodeAt(0) && '9'.charCodeAt(0) >= char.charCodeAt(0)) 
    }
    left = 0
    rigth = s.length - 1

    while (left < rigth) {
        while ((left < rigth)  && !codeAt(s[left])) left++
        

        while ((rigth > left)  && !codeAt(s[rigth])) rigth--
        
        
        if (s[left].toLowerCase() != s[rigth].toLowerCase()) return false
        left++
        rigth--
    }

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), true)