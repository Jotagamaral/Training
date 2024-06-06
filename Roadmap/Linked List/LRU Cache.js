// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

/**
 * @param {number} capacity
 */
class Node {
    constructor(key ,val) {
        this.key = key;
        this.val = val;
        this.prev = null; 
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map();

    this.left = new Node(0,0);
    this.right = new Node(0,0);
    this.left.next = this.right;
    this.right.prev = this.left;
    
};

LRUCache.prototype.remove = function(node) {
    let prev = node.prev;
    let nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev; 

}

LRUCache.prototype.insert = function(node) {
    let prev = this.right.prev;
    let nxt = this.right;
    prev.next = node;
    node.prev = prev;
    node.next = nxt;
    nxt.prev = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)){
        this.remove(this.cache.get(key));
        this.insert(this.cache.get(key));

        return this.cache.get(key).val;
    }
    return -1;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }

    let newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(this.cache.get(key));

    if (this.cache.size > this.cap) {
        let lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key);
    }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */