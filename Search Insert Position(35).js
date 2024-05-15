var searchInsert = function (nums, target) {
  let le = 0;
  let ri = nums.length - 1;
  while (le <= ri) {
    let mid = Math.floor((le + ri) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      ri = mid - 1;
    } else {
      le = mid + 1;
    }
  }
  return le;
};
