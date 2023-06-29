// 💡 **Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.
// ## Code Solution
function appeared(arr1, arr2, arr3) {
  let arr = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      arr.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  return arr;
}

// Driver code
let arr1 = [1, 2, 3, 4, 5],
  arr2 = [1, 2, 5, 7, 9],
  arr3 = [1, 3, 4, 5, 8];
result1 = appeared(arr1, arr2, arr3);
console.log("Result of first question is : ", result1);

/* 💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** [nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].*/
// ## Code Solution

function distinct(nums1, nums2) {
  const distinct1 = nums1.filter((num) => !nums2.includes(num));
  const distinct2 = nums2.filter((num) => !nums1.includes(num));

  return [distinct1, distinct2];
}

// Driver code
let ar = (nums1 = [1, 2, 3]),
  nums2 = [2, 4, 6];
result2 = distinct(nums1, nums2);
console.log("Result of 2 question is : ", result2);

// ## Code Solution

function transpose(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const transposMatrix = [];
  for (let i = 0; i < columns; i++) {
    transposMatrix[i] = [];
    console.log(transposMatrix);
    for (let j = 0; j < rows; j++) {
      transposMatrix[i][j] = matrix[j][i];
    }
  }

  // return transposMatrix;
}

// Driver code

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = transpose(matrix);
console.log(result);

// 💡 **Question 4**
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

// **Example 1:**

// Input: nums = [1,4,3,2]

// Output: 4

// **Explanation:** All possible pairings (ignoring the ordering of elements) are:

// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

// So the maximum possible sum is 4.

function maxsum(arr) {
  arr.sort((a, b) => {
    a - b;
  });
  n = 0;
  for (let i = 0; i < arr.length; i += 2) {
    n += arr[i];
  }
  return n;
}
// Driver code

let nums = [1, 4, 3, 2];
console.log("maxsum", maxsum(nums));

/* 💡 **Question 5**
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*. */

function countRows(n) {
    let i = 1;
    while (n >= i) {
      n -= i;
      i++;
    }
  
    return i - 1;
  }
// Driver code
const num = 5;
console.log(countRows(num)) 

// 💡 **Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

function squaring(nums) {
    const squaredArray = nums.map(num => num ** 2);
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}
let nums6 = [-4,-1,0,3,10]
result6 = squaring(nums6)
console.log(result6)


// 💡 **Question 8**

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// *Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// **Example 1:**

// **Input:** nums = [2,5,1,3,4,7], n = 3

// **Output:** [2,3,5,4,1,7]

// **Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

function question8(nums, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(nums[i]);
      arr.push(nums[i + n]);
    }
    return arr;
  }

//   driver code
const nums8 = [2, 5, 1, 3, 4, 7];
const n8 = 3;
const result8 = question8(nums8, n8);
console.log(result);