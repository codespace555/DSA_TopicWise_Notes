let nums1 = [1,2,3,4,5]
let m = 5
let nums2 = []
let n = 0


for (let k = 0; k < m; k++) {
    if (nums1[k] > 0 ) {
        nums2.push((nums1[k]));

    }
}
nums1.length = 0
for (let j = 0; j < nums2.length; j++) {
    nums1.push(nums2[j]);
    
}
console.log(nums1.sort())


