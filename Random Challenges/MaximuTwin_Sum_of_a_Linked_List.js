// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

// Example 1:

// Input: head = [5,4,2,1]
// Output: 6

// Example 2:

// Input: head = [4,2,2,3]
// Output: 7

// Example 3:

// Input: head = [1,100000]
// Output: 100001

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    slow = head
    fast = head
    prev = null
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp 
    }
    res = 0
    while (slow != null) {
        res = Math.max(res, prev.val + slow.val)
        prev = prev.next
        slow = slow.next
    }  
    return res
};