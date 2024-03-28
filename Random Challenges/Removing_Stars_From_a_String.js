// You are given a string s, which contains stars *.
// In one operation, you can:
// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Input: s = "leet**cod*e"
// Output: "lecoe"

// Input: s = "erase*****"
// Output: ""


var removeStars = function(s) {
    output = []
    for (i = 0; i < s.length; i++) {
        if (s[i] != "*") { 
            output.push(s[i])
        } else {
            if (output.length >= 1) {
                output.pop()
            }
        }
    }

    return output.join("")
};

console.log(removeStars("leet**cod*e"))
console.log(removeStars("erase*****"))
