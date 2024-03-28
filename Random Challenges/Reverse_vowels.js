// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
// and upper cases, more than once.

var reverseVowels = function(s) {

    var arr = s.split('')
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    var temp = ''
    var list = s.split('')

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            for (let j = arr.length; j > 0; j--) {
                if (vowels.includes(arr[j]) && j > i) {
                    temp = list[i]
                    list[i] = list[j]
                    list[j] = temp
                    arr.splice(j, 1)
                    break       
                }       
            }
        }  
    }
    return list.join('')
};


console.log(reverseVowels('Aa'), 'aA')
