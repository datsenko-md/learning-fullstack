// https://ru.hexlet.io/challenges/js_functions_configuration_parsing_exercise

const getForwardedVariables = (content) => content
  .split('\n')
  .filter((line) => line.startsWith('environment'))
  .map((line) => line.replaceAll('environment=', ''))
  .map((line) => line.replaceAll('"', ''))
  .flatMap((line) => line.split(','))
  .filter((option) => option.startsWith('X_FORWARDED_'))
  .map((option) => option.replaceAll('X_FORWARDED_', ''))
  .join(',');

export default getForwardedVariables;

// const getForwardedVariables = (content) => content
//   .split('\n')
//   .filter((line) => line.startsWith('environment'))
//   .map((line) => line
//     .slice(13, -1)
//     .split(',')
//     .filter((option) => option.startsWith('X_FORWARDED_'))
//     .map((option) => option.substring(12)))
//   .reduce((acc, options) => [...acc, ...options], [])
//   .join(',');

// export default getForwardedVariables;
