// There are n kids with candies. You are given an integer array candies, 
// where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving 
// the ith kid all the extraCandies, they will have the greatest number of candies among 
// all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    var bigger = -Infinity
    candies.forEach(element => {
        if (element > bigger) {
            bigger = element
        }
    });
    for (let i = 0; i < candies.length; i++) {
        candies[i] = (candies[i] + extraCandies) >= bigger ? true : false
    }
    return candies  
};
console.log(kidsWithCandies([12,1,12], 10))
