const nums = [
  -336, 513, -560, -481, -174, 101, -997, 40, -527, -784, -283, -336, 513, -560,
  -481, -174, 101, -997, 40, -527, -784, -283, 354,
];

var singleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};

console.log(singleNumber(nums));
