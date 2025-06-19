/* Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
For example, given:
const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9. */


function getIndices(nums, target) {
  if (!Array.isArray(nums)) throw new Error("Input must be an array.");
  if (typeof target !== "number") throw new Error("Target must be a number.");

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number") throw new Error("Array must contain only numbers.");
    
    for (let j = i + 1; j < nums.length; j++) {
      if (typeof nums[j] !== "number") throw new Error("Array must contain only numbers.");
      
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error("Two sum solution does not exists.");
}

console.log(getIndices([2, 7, 11, 15], 9));

