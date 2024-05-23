const s = "abc";
const t = "ahbgdc";

var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  }
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[n] === t[i]) {
      n += 1;
    }
  }
  return n === s.length;
};

console.log(isSubsequence(s, t));
