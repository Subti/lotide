const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key].toLowerCase() === val.toLowerCase()) {
      return key;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};