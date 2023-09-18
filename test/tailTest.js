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

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! (not really because i fixed it)

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!