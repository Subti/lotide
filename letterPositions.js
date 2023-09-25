const letterPositions = (str) => {
  const results = {};
  let strLower = str.toLowerCase().split(' ').join('');
  let indexCount = 0;
  for (let letter of strLower) {
    if (!results.hasOwnProperty(letter)) {
      results[letter] = [indexCount];
    } else {
      results[letter].push(indexCount);
    }
    indexCount++
  }
  return results;
}

module.exports = letterPositions;