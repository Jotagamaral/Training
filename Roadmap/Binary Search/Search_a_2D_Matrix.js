// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let rowsLen = matrix.length, colsLen = matrix[0].length;
    let left = 0,
        right = rowsLen * colsLen - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (matrix[Math.floor(mid / colsLen)][mid % colsLen] === target) return true;
        else if (target < matrix[Math.floor(mid / colsLen)][mid % colsLen]) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 10), true)

