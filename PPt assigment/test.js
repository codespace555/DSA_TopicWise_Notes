let nums = [1,2,3,4,5,5]
function ques8(nums) {
    n = nums.length-1
for (let i = 0; i <= nums.length; i++) {
   for (let j = n; j > 0; j--) {
    if(nums[i] == nums[j+i]){
        return([nums[i],nums[j+i]+1])
    }
    
   }
}
}
console.log(ques8(nums))