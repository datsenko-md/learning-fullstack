// https://ru.hexlet.io/courses/js-arrays/lessons/build-strings/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const bulidDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];
  for (const definition of definitions) {
    const term = definition[0];
    const description = definition[1];
    parts.push(`<dt>${term}</dt><dd>${description}</dd>`);
  }

  const innerValue = parts.join('');
  return `<dl>${innerValue}</dl>`;
};

export default bulidDefinitionList;
