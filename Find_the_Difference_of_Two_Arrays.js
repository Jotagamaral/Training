// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.


// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]

var findDifference = function(nums1, nums2) {
    let set1 = new Set(), set2 = new Set()
    nums1.forEach(element => {
        set1 = !nums2.includes(element) ? set1.add(element) : set1
    });
    nums2.forEach(element => {
        set2 = !nums1.includes(element) ? set2.add(element) : set2
    });
    const res1 = Array.from(set1), res2 = Array.from(set2)
    return [res1, res2]
};

console.log(findDifference([1,2,3],[2,4,6]))
console.log(findDifference([1,2,3,3],[1,1,2,2]))
