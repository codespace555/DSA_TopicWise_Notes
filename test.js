let arr = [1, 2, 3, 4, 5];
function myFunction(arr, k, n) {
  
  let j = n;
  
  arr.reverse()
  for (let i = n; i < k; i--) {
    const element = arr[i];
    console.log(element)
  }

}

console.log(myFunction(arr , 3,5));

// console.log(arry)
