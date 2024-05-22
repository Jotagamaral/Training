// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

//* Solution: Linked List | Time: O(N)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return head;

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow.next;
    slow.next = null;

    while (curr) {
        let nextReal = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextReal;
    }

    let head1 = head;
    let head2 = prev;
    
    while(head2) {
        temp1 = head1.next;
        temp2 = head2.next;
        head1.next = head2;
        head2.next = temp1;
        head1 = temp1
        head2 = temp2
    }

    return head
}