// https://ru.hexlet.io/courses/js-objects/lessons/spread-operator/exercise_unit

const make = (name, data = {}) => {
  const defaultValues = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  return { name, ...defaultValues, ...data };
};

export default make;
