const gain = [-4, -3, -2, -1, 4, 3, 2];

var largestAltitude = function (gain) {
  let alt_points = [];
  let v = 0;
  for (let i = 0; i < gain.length; i++) {
    v = v + gain[i];
    alt_points.push(v);
  }
  return Math.max(...alt_points) > 0 ? Math.max(...alt_points) : 0;
};

console.log(largestAltitude(gain));
