const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key].toLowerCase() === val.toLowerCase()) {
      return key;
    }
  }
}

module.exports = findKeyByValue;