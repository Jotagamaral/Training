// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let total = nums1.length + nums2.length 
    let half = Math.floor(total / 2)

    if (nums1.length < nums2.length) {
        variable = nums1
        nums1 = nums2
        nums2 = variable
    }

    let left = 0, right = nums1.length - 1
    while (true) {
        middle_nums1 = Math.floor((left + right) / 2)
        middle_nums2 = half - middle_nums1 - 2

        nums1_left = middle_nums1 >= 0 ? nums1[middle_nums1] : -Infinity
        nums1_right = (middle_nums1 + 1) < nums1.length ? nums1[middle_nums1 + 1] : Infinity
        nums2_left = middle_nums2 >= 0 ? nums2[middle_nums2] : -Infinity
        nums2_right = (middle_nums2 + 1) < nums2.length ? nums2[middle_nums2 + 1] : Infinity

        if (nums1_left <= nums2_right && nums2_left <= nums1_right) {
            if (total % 2) return Math.min(nums1_right, nums2_right)
            return (Math.max(nums1_left, nums2_left) + Math.min(nums1_right, nums2_right)) / 2
        } else if (nums1_left > nums2_right) right = middle_nums1 - 1
        else left = middle_nums1 + 1   
    }
};


console.log(findMedianSortedArrays([1,3],[2]), 2.0000)

console.log(findMedianSortedArrays([1,2],[3,4]), 2.50000)