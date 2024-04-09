// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    stack = []
    res = []
    function bactrack(openN, closedN) {
        if (openN == closedN && openN == n) {
            res.push(stack.join(''))
        }

        if (openN < n) {
            stack.push('(')
            bactrack(openN + 1, closedN)
            stack.pop()
        }

        if (closedN < openN) {
            stack.push(')')
            bactrack(openN, closedN + 1)
            stack.pop()
        }
    }
    bactrack(0,0)
    return res
};


console.log(generateParenthesis(3),["((()))","(()())","(())()","()(())","()()()"])