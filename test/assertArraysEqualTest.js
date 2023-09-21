const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return (`✅Assertion Passed✅: [${actual}] === [${expected}]`);
  } else {
    return (`❌Assertion Failed❌: [${actual}] !== [${expected}]`);
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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => should FAIL
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => should FAIL