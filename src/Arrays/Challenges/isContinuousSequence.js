// https://ru.hexlet.io/challenges/js_arrays_ascending_sequence_exercise

const isContinuousSequence = (sequence) => {
  if (sequence.length < 2) {
    return false;
  }

  const [firstItem] = sequence;
  for (let i = 0; i < sequence.length; i += 1) {
    const expected = firstItem + i;
    if (sequence[i] !== expected) {
      return false;
    }
  }

  return true;
};

export default isContinuousSequence;
