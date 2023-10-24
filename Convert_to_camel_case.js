//Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){
    arr = str.split(/[-\s_]+/)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (i == 0) ? arr[i] : arr[i].charAt(0).toUpperCase() + arr[i].slice(1)   
    }
    return arr.join('')
}

console.log(toCamelCase(''),'')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase("A-B-C"), "ABC")
