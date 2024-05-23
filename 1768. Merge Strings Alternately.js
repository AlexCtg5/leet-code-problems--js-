const word1 = "ab";
const word2 = "pqrs";

var mergeAlternately = function (word1, word2) {
  let result = "";
  let n = 0;
  if (word1.length > word2.length) {
    n = word1.length;
  } else {
    n = word2.length;
  }
  for (let i = 0; i < n; i++) {
    if (i < word1.length) result = result + word1[i];
    if (i < word2.length) result = result + word2[i];
  }
  return result;
};

console.log(mergeAlternately(word1, word2));
