const assertArraysEqual = require('../assertArraysEqual')
const flatten = require('../flatten')


const inputArray = [1, 2, [3, 4], 5, [6]];
const flattenedArray = flatten(inputArray);
// console.log(flattenedArray);
assertArraysEqual(flattenedArray, [1, 2, 3, 4, 5, 6]);