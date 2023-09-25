const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  let midIndex = (arr.length - 1) / 2
  if (arr.length % 2 !== 0) {
    return [arr[midIndex]];
  } else if (arr.length % 2 === 0) {
    return [arr[midIndex - 0.5], arr[midIndex + 0.5]];
  }
}

module.exports = middle;