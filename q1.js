/* Question 1: DSA Given an array of integers, return the length of the longest increasing subsequence.
A subsequence is a sequence that can be derived from the array by deleting some or no elements
without changing the order of the remaining elements. For example, given the array [10, 9, 2, 5, 3, 7,
101, 18], the longest increasing subsequence is [2, 3, 7, 101], and its length is 4. */


function getLongestIncreasingSubSequenceLength(nums) {
  if (!Array.isArray(nums)) throw new Error("Input must be an array of numbers.");
  if (nums.length === 0) return 0;

  const sub = [];

  for (const num of nums) {
    if (typeof num !== "number") throw new Error("Array must contain only numbers.");

    let left = 0, right = sub.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // If num is bigger than all in sub, push it
    if (left < sub.length) {
      sub[left] = num;
    } else {
      sub.push(num);
    }
  }

  return sub.length;
}

console.log(getLongestIncreasingSubSequenceLength([10, 9, 2, 5, 3, 7, 101, 18]));