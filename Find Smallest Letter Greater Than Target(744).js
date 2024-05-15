var nextGreatestLetter = function (letters, target) {
  let set = new Set(letters);
  for (let l of set) {
    if (l > target) {
      return l;
    }
  }
  return letters[0];
};
