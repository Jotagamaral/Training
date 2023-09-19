// Given an input string 's', reverse the order of the words.
  
// A word is defined as a sequence of non-space characters. The words in 's' will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space. 

// Note that 's' may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

var reverseWords = function(s) {

    const arr = s.split(' ').filter(entry => /\S/.test(entry));
    var list = []

    for (let i = arr.length -1 ; i >= 0; i--) {
        list.push(arr[i])
    }
    return list.join(' ')
};


console.log(reverseWords("a good   example"), "example good a")

