/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:

Input:
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.


Example 2:

Input:
nums = [1, 2, 3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.


Note:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for (let piv = 0; piv < nums.length; piv++) {
    let leftSum = nums.slice(0, piv).reduce((accum, el) => accum + el, 0);
    let rightSum = nums
      .slice(piv + 1, nums.length)
      .reduce((accum, el) => accum + el, 0);

    if (leftSum == rightSum) {
      return piv;
    }
  }

  return -1;
};

//More optimized Solution

const pivotIndex = nums => {
  let sumAll = nums.reduce((accum, num) => accum + num, 0);
  let leftSum = 0;

  for (let piv = 0; piv < nums.length; piv++) {
    if (leftSum == sumAll - leftSum - nums[piv]) return piv;
    leftSum += nums[piv];
  }

  return -1;
};
