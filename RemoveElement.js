let nums = [0,0,1,1,1,1,2,3,3];
// let unique = [];
// if (nums.length > 1){
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i-1] != nums[i + 1]) {
//       unique.push(nums[i]);

//   }
  
// }}else{
//     for (let j = 0; j < nums.length; j++) {
//         unique.push(nums[j]);
//     }
// }

// console.log(unique)

let i = 0;
for (const n of nums)
  if (i < 2 || n > nums[i - 2])
    nums[i++] = n;
console.log(n);