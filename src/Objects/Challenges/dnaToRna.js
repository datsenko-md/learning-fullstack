// https://ru.hexlet.io/challenges/js_objects_to_rna_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const dnaToRna = (dna) => {
  const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  const rna = [];
  for (const nucleotide of dna) {
    if (!Object.hasOwn(map, nucleotide)) {
      return null;
    }
    rna.push(map[nucleotide]);
  }

  return rna.join('');
};

export default dnaToRna;
