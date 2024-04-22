var majorityElement = function (nums) {
  let maj = 0;
  let count = 0;
  for (let n of nums) {
    if (count === 0) {
      maj = n;
    }
    if (maj === n) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
};
