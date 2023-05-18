let nums = [-1], k = 1
let unique = []
for (let i = nums.length-k; i < nums.length; i++) {
    unique.push(nums[i])
}
for (let j = 0; j < nums.length-k; j++) {
    unique.push(nums[j])
    
}
nums.length = 0
for (let n = 0; n < unique.length; n++) {
    nums.push(unique[n])

}
console.log(nums)

k = k % nums.length;
nums.splice(0, 0, ...nums.splice(nums.length - k, k));

return nums