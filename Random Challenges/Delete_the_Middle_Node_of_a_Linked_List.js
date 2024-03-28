//You are given the head of a linked list. 
//Delete the middle node, and return the head of the modified linked list.

//The middle node of a linked list of size n is the ⌊n / 2⌋th node 
//from the start using 0-based indexing, where ⌊x⌋ 
//denotes the largest integer less than or equal to x.

//For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

//Input: head = [1,3,4,7,1,2,6]
//Output: [1,3,4,1,2,6]

//Input: head = [1,2,3,4]
//Output: [1,2,4]

//Input: head = [2,1]
//Output: [2]


var deleteMiddle = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    if (prev == null) {
        head = head.next
    } else {
        prev.next = slow.next;
    }

    return head;
};


console.log(deleteMiddle([1,3,4,7,1,2,6]))
console.log(deleteMiddle([1,2,3,4]))
console.log(deleteMiddle([2,1]))