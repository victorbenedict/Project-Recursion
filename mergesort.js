function mergesort(arr) { // select the array/subarray
  // Split the selected array (as evenly as possible)
  
  const arrMidsection = Math.round(arr.length / 2 )
  const leftArr = arr.slice(0, arrMidsection)
  const rightArr = arr.slice(arrMidsection)
    
  if(arr.length == 1) {  // An array of length 1 cannot be split, ready for merge
    return arr
  }
  // After the split, start the recursion on the left and right subarrays
  const newleftArr = mergesort(leftArr)
  const newrightArr = mergesort(rightArr)
  return arrSort(newleftArr, newrightArr)
}

// sort function during the unwinding process in the recursion
function arrSort(leftArr, rightArr) {
  let arr = [];
 
  while (leftArr.length > 0 && rightArr.length > 0) { // the loop will break if either of the subarrays is empty
    if (leftArr[0] < rightArr [0]) {  // select and compare the first value of the subarrays then add to the new array
      arr.push(leftArr.shift()) // use shift to remove the minimum value
    } else {
      arr.push(rightArr.shift())
    }
  } 
  // When one list becomes empty, copy all values from the remaining array into the sorted array
  return leftArr.length == 0 ? arr.concat(rightArr) : arr.concat(leftArr)
}

// Tests, assuming that the array have proper values
console.log(mergesort([0]))                           // returns [ 0 ]
console.log(mergesort([1,2,3]))                       // returns [ 1, 2, 3 ]
console.log(mergesort([5,4,3,2,1]))                   // returns [ 1, 2, 3, 4, 5 ]
console.log(mergesort([2,-3,1,4,-6,7,5]))             // returns [-6, -3, 1, 2, 4, 5, 7]
console.log(mergesort([78,802,762,247,141,3,338,91])) // returns [ 3, 78, 91, 141, 247, 338, 762, 802 }