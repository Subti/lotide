const flatten = (arr) => {
  let flattened = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flattened = flattened.concat(element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

module.exports = flatten;