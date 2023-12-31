const { assert } = require('console');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return (`✅Assertion Passed✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return (`❌Assertion Failed❌: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;