// https://ru.hexlet.io/courses/js-arrays/lessons/destructuring/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable import/prefer-default-export */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  let [nearestLocation] = locations;
  const [, nearestPoint] = nearestLocation;
  let naerestDistance = getDistance(currentPoint, nearestPoint);
  for (const location of locations) {
    const [, locationPoint] = location;
    const currentDistance = getDistance(currentPoint, locationPoint);
    if (currentDistance < naerestDistance) {
      nearestLocation = location;
      naerestDistance = currentDistance;
    }
  }

  return nearestLocation;
};

export { getTheNearestLocation };
