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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

const eqObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false