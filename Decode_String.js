// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

var decodeString = function(s) {
    stack = []
    for (const i of s) {
        if (i != ']') {
            stack.push(i)
        } else {
            substr = ""
            while (stack[stack.length - 1] != "[") {
                substr = stack.pop() + substr
            }
            stack.pop()
            k = ""
            while ((stack.length > 0) && !isNaN(parseInt(stack[stack.length - 1]))) {
                k = stack.pop() + k
            }
            stack.push(substr.repeat(parseInt(k)) )
        }
    }
    return stack.join("")
};

console.log(decodeString('3[a]2[bc]'))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("100[leetcode]"))
