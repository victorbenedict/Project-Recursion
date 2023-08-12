// Fibonacci using iteration
function fibs(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(i)
    } else if (i === 1) {
      arr.push(i)
    } else {
      arr.push(arr[i - 1] + arr[i - 2])
    }
  }
  return arr;
}

console.log(fibs(0))      // returns []
console.log(fibs(1))      // returns [ 0 ]
console.log(fibs(5))      // returns [ 0, 1, 1, 2, 3 ]
console.log(fibs(8))      // returns [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibs(13))     // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
