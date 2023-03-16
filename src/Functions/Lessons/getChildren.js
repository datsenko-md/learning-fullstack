// https://ru.hexlet.io/courses/js-functions/lessons/map/exercise_unit

// export default (users) => users.flatMap(({ children }) => children);

export default (users) => users
  .flatMap(({ friends }) => friends)
  .filter(({ gender }) => gender === 'female');
