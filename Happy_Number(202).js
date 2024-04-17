const n = 20;

var isHappy = function (n) {
  if (n < 10) {
    if (n === 1 || n === 7) {
      return true;
    }
    return false;
  }

  let total = 0;
  while (n > 0) {
    let digit = n % 10;
    total += digit ** 2;
    n = n - digit;
    n = n / 10;
  }

  if (total === 1) {
    return true;
  }

  return isHappy(total);
};

console.log(isHappy(n));
