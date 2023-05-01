// https://ru.hexlet.io/challenges/js_functions_filter_anagrams_exercise

export default (anagram, words) => words
  .map((word) => word.split('').sort())
  .filter((word) => word === anagram.split('').sort())
  .map((word) => word.join(''));
