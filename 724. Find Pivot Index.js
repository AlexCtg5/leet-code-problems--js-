const nums = [1, 7, 3, 6, 5, 6];

var pivotIndex = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  let leftSum = 0;
  for (i = 0; i < nums.length; i++) {
    if (leftSum * 2 == totalSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex(nums));
