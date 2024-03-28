//You are given two strings word1 and word2. 
//Merge the strings by adding letters in alternating order, 
//starting with word1. If a string is longer than the other, 
//append the additional letters onto the end of the merged string.
//Return the merged string.

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function(word1, word2) {
    arr1 = word1.split('')
    arr2 = word2.split('')
    array = []
    i = 0
    while(i < arr1.length + arr2.length ) {
        if (i > arr1.length) {
            array = array.concat(arr2.slice(i))
            break
        } else if (i > arr2.length) {
            array = array.concat(arr1.slice(i))
            break
        }
        array.push(arr1[i])
        array.push(arr2[i])
        i++   
    }
   return array.join('')
};

console.log(mergeAlternately('adc', 'rtyuio'))
