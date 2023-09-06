//A Narcissistic Number (or Armstrong Number) is a positive 
//number which is the sum of its own digits, each raised to 
//the power of the number of digits in a given base. Your code
//must return true or false (not 'true' and 'false') depending
//upon whether the given number is a Narcissistic number in base 10.

function narcissistic(value) {

    let number = 0
    let arr = Array.from(String(value), Number)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**arr.length
        number += arr[i]       
    }
    return number == value ? true : false
}

console.log(narcissistic(7), true);
console.log(narcissistic(153), true);
console.log(narcissistic(122), false);
console.log(narcissistic(487), false);

