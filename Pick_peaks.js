//Write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
//For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
//The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
//Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}
//The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
//Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]}.

function pickPeaks(arr){
    var pos = []
    var peaks = []
    // Search in array --> (i = 1) and (arr.length -1) to avoid first and last items
    for (let i = 1; i < arr.length - 1; i++) {

        // Get Peak and Pos
        if ((arr[i] > arr[i-1] && arr[i] > arr[i+1])) {
            peaks.push(arr[i])
            pos.push(i)        
            
        // Get plateau-peak
        } else if(arr[i] > arr[i-1] && arr[i] == arr[i+1] ){
            var j = i
            while (arr[j] == arr[j+1]) {
                if (arr[j] > arr[j+2]) {
                    peaks.push(arr[i])
                    pos.push(i)
                }
                j++
            }
        }
        
    }
    return ({pos: pos, peaks: peaks})
  }

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
console.log(pickPeaks([]),{pos:[],peaks:[]});
console.log(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
