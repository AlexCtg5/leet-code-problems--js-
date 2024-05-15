var search = function (nums, target) {
  let le = 0;
  let ri = nums.length - 1;
  while (le < ri) {
    let mid = le + Math.floor((ri - le + 1) / 2);
    if (target < nums[mid]) {
      ri = mid - 1;
    } else {
      le = mid;
    }
  }
  return target == nums[le] ? le : -1;
};
