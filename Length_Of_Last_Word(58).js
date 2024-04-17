var lengthOfLastWord = function (s) {
  s = s.trim();
  let letters = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      letters++;
    } else {
      break;
    }
  }
  return letters;
};
