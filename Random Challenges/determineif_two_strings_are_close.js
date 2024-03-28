// Two strings are considered close if you can attain one from the other using the following operations:
// Operation 1: Swap any two existing characters. For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Input: word1 = "abc", word2 = "bca"
// Output: true

// Input: word1 = "a", word2 = "aa"
// Output: false

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true

var closeStrings = function(word1, word2) {

    let set1 = new Set(), set2 = new Set()
    let obj1 = {}, obj2 = {}

    for (let i = 0; i < word1.length; i++) {
        set1.add(word1[i])
        word1[i] in obj1 ?  obj1[word1[i]] += 1 : obj1[word1[i]] = 1   
    }

    for (let j = 0; j < word2.length; j++) {
        set2.add(word2[j])
        word2[j] in obj2 ?  obj2[word2[j]] += 1 : obj2[word2[j]] = 1
    }

    array1 = Array.from(set1)
    array2 = Array.from(set2)
    occur1 = Object.values(obj1).sort().toString()
    occur2 = Object.values(obj2).sort().toString()

    return array1.every(ai => array2.includes(ai)) && occur1 == occur2
};

console.log(closeStrings('abc', 'bca'))
console.log(closeStrings('a', 'aa'))
console.log(closeStrings('cabbba','abbccc'))
console.log(closeStrings('abbzzca','babzzcz'))
console.log(closeStrings('abbzccca','babzzczc'))
