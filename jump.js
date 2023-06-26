let nums = [2, 5, 0, 0];
let n = 0;
function jump(nums) {
  for (let i = nums[0]; i < nums.length; i++) {
    if (nums[i] == 0) {
      return false;
    } else {
      for (let k = nums[0] + nums[i]; k < nums.length; k++) {
        if (nums[k] == 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}

console.log(jump(nums));
