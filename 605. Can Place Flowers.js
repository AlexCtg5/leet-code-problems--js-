var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i <= flowerbed.length; i++) {
    if (flowerbed[i] == 0 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }
  return n <= 0;
};
