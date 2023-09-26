// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// After you are done modifying the input array, return the new length of the array.

var compress = function(chars) {
    s = []
    count = 1
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i+1]) {
            count++
        } else {
            s.push(chars[i])
            count > 1 ? count > 9 ? s = s.concat(count.toString().split('')) : s.push(count) : count
            count = 1
        }
    }
    return s.length
};

console.log(compress(["a","a","b","b","c","c","c"]), ["a","2","b","2","c","3"], 6)
console.log(compress(["a"]), ["a"], 1)
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]), ["a","b","1","2"], 4)
