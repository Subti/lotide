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

const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  let midIndex = (arr.length - 1) / 2
  if (arr.length % 2 !== 0) {
    return [arr[midIndex]];
  } else if (arr.length % 2 === 0) {
    return [arr[midIndex - 0.5], arr[midIndex + 0.5]];
  }
}