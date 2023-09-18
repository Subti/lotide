const assertEqual = function(actual, expected) {
  if (assertArrays(actual, expected)) {
    console.log(`✅Assertion Passed✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌Assertion Failed❌: [${actual}] !== [${expected}]`);
  }
};

const assertArrays = function(arr1, arr2) {
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

const tail = (array) => {
  let tailArray = array.slice(1);
  return tailArray;
};