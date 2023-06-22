let nums1 = [0,-1,-10,9,-25], m = 5, nums2 = [1], n = 1
nums1.length = m
for (let i = 0; i < n; i++) {
 nums1.push(nums2[i]);
  
}

function sortNumber(a,b){
  return a - b;
}

console.log( nums1.sort(sortNumber) );
