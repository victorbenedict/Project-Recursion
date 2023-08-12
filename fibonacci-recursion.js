const cl = console.log
const ct = console.table

// Fibonacci using recursion

function fibsRec(n, arr = [0, 1]) {
  if (n <= 0) {
    return arr = []
  }
  else if (n == 1) {
    return arr = [0]

  } else if (n == 2) { 
    return arr
  } 
  fibsRec(n - 1, arr)
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  return arr
}

console.log(fibsRec(0))      // returns []
console.log(fibsRec(1))      // returns [ 0 ]
console.log(fibsRec(5))      // returns [ 0, 1, 1, 2, 3 ]
console.log(fibsRec(8))      // returns [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibsRec(13))     // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
