// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

//* Solution : Hashmap with ASCII | Time complexity: O(n * m "* 26") | Memory: O(n)

var groupAnagrams = function(strs) {
    res = new Map()

    for (let s of strs) {
        count = Array(26).fill(0)

        for (let char in s) {
            count[s.charCodeAt(char) - 'a'.charCodeAt()] += 1
        }
        const key = count.join(',')

        if (!res.has(key)) res.set(key,[])

        res.get(key).push(s)
    }

    return Array.from(res.values())
};




console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))