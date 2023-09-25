const assertArraysEqual = require('../assertArraysEqual')

const map = function (array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
}

const words = ["in", "carnage", "i", "bloom", ",", "like", "a", "flower", "in", "the", "dawn", "."];
const results1 = map(words, word => word[0]);
// console.log(results1)
assertArraysEqual(results1, ["i", "c", "i", "b", ",", "l", "a", "f", "i", "t", "d", "."])