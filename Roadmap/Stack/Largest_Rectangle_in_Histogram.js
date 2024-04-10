// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:

// Input: heights = [2,4]
// Output: 4

//* Solution : Stack | Time complexity: O(n) | Memory: O(n)

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    maxArea = 0
    stack = []

    for (let i = 0; i < heights.length; i++) {  
        start = i
        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            tuple = stack.pop()
            maxArea = Math.max(maxArea, tuple[1] * (i - tuple[0]))
            start = tuple[0]
        }
        stack.push([start, heights[i]])
    }
    for (let j = 0; j < stack.length; j++) {
        maxArea = Math.max(maxArea, stack[j][1] * (heights.length - stack[j][0]))
    }
    return maxArea
};

console.log(largestRectangleArea([2,1,5,6,2,3]), 10)
console.log(largestRectangleArea([2,4]), 4)