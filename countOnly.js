const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  let result = {};
  for (let name of allItems) {
    if (itemsToCount.hasOwnProperty(name) && itemsToCount[name]) {
      if (!result.hasOwnProperty(name)) {
        result[name] = 1;
      } else {
        result[name]++;
      }
    }
  }
  return result;
}