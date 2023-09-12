// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

function dirReduc(arr){

  n = 'NORTH'
  s = 'SOUTH'
  e = 'EAST'
  w = 'WEST'
  i = 0
  while (i < arr.length) {
    if (arr[i] == n && arr[i+1] == s) {
    arr.splice(i,2)
    i = 0
    continue
    } else if (arr[i] == s && arr[i+1] == n) {
    arr.splice(i,2)
    i = 0
    continue
    } else if (arr[i] == e && arr[i+1] == w) {
    arr.splice(i,2)
    i = 0
    continue
    } else if (arr[i] == w && arr[i+1] == e) {
    arr.splice(i,2)
    i = 0
    continue
    }
    i++
  }
  return arr
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),[]);
