const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));