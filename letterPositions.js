const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed✅: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌Assertion Failed❌: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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