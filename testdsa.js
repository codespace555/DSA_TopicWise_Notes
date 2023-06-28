// // replace
// let data = [12, 52, 85, 45, 75, 9, 5];
// let postion = 2;
// let replace = 88;
// // for (let i = postion; i < data.length; i++) {
// //   data[i] = replace;
// //   console.log(data);
// //   break;
// // }

// // insert
// for (let i = data.length-1; i > 0; i--) {
//   if (i >= postion) {
//     data[i + 1] = data[i];
//   }
//   if (i == postion) {
//     data[i] = replace;
//   }
//   console.log(data);
// }
//remove
function removeItem(nums,element) {
for (let i = 0; i < nums.length; i++) {
  if (nums[i]== element){
    nums[i] = nums[i+1]
    nums.pop(nums.length-1)
    return nums
  }
  
}
}
console.log(removeItem([36, 12, 3], 12))

// count
const numbers = [1, 2, 3, -1, 2,-1,3,3]
function countnumber(numbers,element) {
  count = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == element) {
    count.push(numbers[i])
  }
}
return (count.length)
}

console.log(countnumber(numbers, 3))




