const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

console.log(kidsWithCandies(candies, extraCandies));
