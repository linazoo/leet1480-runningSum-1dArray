// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// With Loop

// var runningSum = function (nums) {
//   let answer = [];
//   let total = 0;

//   for (const val of nums) {
//     // total = total + val;
//     total += val
//     // console.log({next})
//     answer.push(total);
//   }
//   return answer;
// };

// console.log(runningSum([3,1,2,10,1]));

var runningSum = function (nums) {
  let total = 0;
  return nums.map((num) => {
    total += num;
    return total;
  });
};
console.log(runningSum([3, 1, 2, 10, 1]));

// loop through the array and add the value to the runningSum array plus add the value of the previous element in the array
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
