// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

//* Solution : Stack - HashSet | Time complexity: O(n) | Memory: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = []
    const closeToOpen = new Map([[")" , "("], ["]" , "["] , ["}" , "{"] ])

    for (const c of s) {
        if (closeToOpen.has(c)) {
            
            if (stack.length > 0 && stack[stack.length - 1] == closeToOpen.get(c)) stack.pop()
            else return false

        } else stack.push(c)
    }
    return stack.length == 0 ? true : false    
};


console.log(isValid("()[]{}"), true)