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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);