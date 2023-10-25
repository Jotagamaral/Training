// You are given an integer array height of length n. There are n vertical lines 
// drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the 
// container contains the most water. Return the maximum amount of water a container 
// can store. Notice that you may not slant the container.


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// Input: height = [1,1]
// Output: 1

var maxArea = function(height) {

    max = -Infinity
    i = 0
    j = height.length - 1

    while(i < j) {
        cal = (Math.min(height[j], height[i])) * (j - i)
        max = Math.max(cal, max)

        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
