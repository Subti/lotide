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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return (`✅Assertion Passed✅: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    return (`❌Assertion Failed❌: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

console.log(assertObjectsEqual({ lol: 1, xd: 2 }, { lol: 1, xd: 2 }))