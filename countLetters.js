const countLetters = (str) => {
  let lowerStr = str.toLowerCase().split(' ').join('');
  let letterCount = {};
  for (let letter of lowerStr) {
    if (!letterCount.hasOwnProperty(letter)) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
}

module.exports = countLetters;