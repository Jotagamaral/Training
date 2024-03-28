// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Input: asteroids = [5,10,-5]
// Output: [5,10]

// Input: asteroids = [8,-8]
// Output: []

// Input: asteroids = [10,2,-5]
// Output: [10]

var asteroidCollision = function(asteroids) {
    stack = []
    for (const i in asteroids) {    
        last = stack[stack.length - 1]
        while ((stack.length > 0) && (asteroids[i] < 0)  && (last > 0))  {  
            diff = asteroids[i] + last
            if (diff < 0) {
                stack.pop()
                last = stack[stack.length - 1]
            } else if (diff > 0) {
                asteroids[i] = 0    
            } else {
                asteroids[i] = 0
                stack.pop()
                last = stack[stack.length - 1]
            }
        }
        if (asteroids[i] != 0) {
            stack.push(asteroids[i])
        }
    }
    return stack
};
