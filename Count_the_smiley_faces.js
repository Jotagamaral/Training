// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]


function countSmileys(arr) {
    let count = 0
    arr.forEach(element => {     
        if (element.length == 2 && (element.includes(':') || element.includes(';')) && (element.includes(')') || element.includes('D'))) {
            count++  
        } else if (element.length == 3 && (element.includes(':') || element.includes(';')) && (element.includes('-') || 
                   element.includes('~')) && (element.includes(')') || element.includes('D'))) {
            count++
        }      
    });
    return count;
  }

console.log(countSmileys([]                             ), 0);
console.log(countSmileys([':D',':~)',';~D',':)']        ), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
