A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
function narcissistic(value) {

    let number = 0
    let arr = Array.from(String(value), Number)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**arr.length
        number += arr[i]       
    }
    return number == value ? true : false
}
