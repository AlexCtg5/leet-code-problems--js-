var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i <= grid.length - 1; i++) {
    for (let j = 0; j <= grid[i].length - 1; j++) {
      if (grid[i][j] < 0) {
        count += 1;
      }
    }
  }
  return count;
};
