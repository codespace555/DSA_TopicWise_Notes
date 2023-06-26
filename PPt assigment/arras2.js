// 💡 **Question 1**
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// **Example 1:**
// Input: nums = [1,4,3,2]
// Output: 4

// **Explanation:** All possible pairings (ignoring the ordering of elements) are:

// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is

function maxsum(arr) {
  arr.sort((a, b) => {
    a - b;
  });
  n = 0;
  for (let i = 0; i < arr.length; i += 2) {
    let m = i;
    n += arr[m];
  }
  return n;
}

let nums = [1, 4, 3, 2];
console.log("maxsum", maxsum(nums));
// Question 2
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3

// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

function maxcandie(candyType) {
  const candies = new Set();
  for (let i = 0; i < candyType.length; i++) {
    candies.add(candies[i]);
  }
  return Math.round(Math.max(candies.size, candyType.length / 2));
}
// let candyType = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log('maxcandie', maxcandie(candyType))
// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

function maxproduct(nums) {
  const n = nums.length;
  const m1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const m2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(m1, m2);
}
const nums5 = [1, 2, 3];
console.log("maxproduct", maxproduct(nums5));
// Question 6
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

function targetfun(nums, target) {
  let start = 0
  let end = nums.length - 1;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
  return -1;
}

let nums6 = [-1, 0, 3, 5, 9, 12],
  target = 9;
console.log(targetfun(nums6, target));

// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

function monotonic(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      decreasing = false;
    }
    if (!increasing && !decreasing) {
      return false;
    }
  }

  return true;
}
console.log(monotonic([1, 2, 3]))

// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

function Score(nums, k) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  
  if (max - min <= 2 * k) {
    return 0;
  } else {
    return max - min - 2 * k;
  }
}
let nums8 = [1], k = 0
console.log("Score", Score(nums8,k));