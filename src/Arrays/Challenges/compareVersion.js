// https://ru.hexlet.io/challenges/js_arrays_compare_versions_exercise

const compareVersion = (version1, version2) => {
  const [major1, minor1] = version1.split('.');
  const [major2, minor2] = version2.split('.');

  const major = Math.sign(major1 - major2);
  const minor = Math.sign(minor1 - minor2);

  return major === 0 ? minor : major;
};

export default compareVersion;
