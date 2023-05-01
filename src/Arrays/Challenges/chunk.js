// https://ru.hexlet.io/challenges/js_arrays_chunk_exercise

const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
};

export default chunk;
