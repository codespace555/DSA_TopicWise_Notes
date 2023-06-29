// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function Closest(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let Sum = Infinity; // Initialize the closest sum to infinity

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === target) {
        return currentSum; // Found an exact match, return the sum
      } else if (
        Math.abs(currentSum - target) < Math.abs(Sum - target)
      ) {
        Sum = currentSum; // Update the closest sum if necessary
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Sum;
}

const nums = [-1, 2, 1, -4];
const target = 1;
const result = Closest(nums, target);
console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

const nums4 = [1, 3, 5, 6];
const target4 = 5;
const result4 = search(nums4, target4);
console.log(result4);

//
// 💡 **Question 5**
// You are given a large integer represented as an integer array digits, where each
// digits[i] is the ith digit of the integer. The digits are ordered from most significant
// to least significant in left-to-right order. The large integer does not contain any
// leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function Increment(num) {
  let ele = parseInt(num.join(""));
  ele = ele + 1;
  let Output = String(ele);
  return [...Output];
}
let num5 = [1, 2, 3];
console.log(Increment(num5));

//   Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

function singlenumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

const nums6 = [2, 2, 1];
const result6 = singlenumber(nums6);
console.log(result6);
// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}
const intervals = [[0, 30], [5, 10], [15, 20]];
const result8 = canAttendMeetings(intervals);
console.log(result8); 