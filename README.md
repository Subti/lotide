# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**
```sh
`npm install @subti/lotide`
```

**Require it:**
```sh
`const _ = require('@subti/lotide');`
```

**Call it:**
```sh
`const results = _.tail([1, 2, 3]) // => [2, 3]`
```

## Documentation

The following functions are currently implemented:

### **`assertArraysEqual(actual, expected)`**
Compares two arrays for equality and logs an assertion.

<b>Example:</b>

```javascript
_.assertArraysEqual([42, 1337, 9001], [42, 1337, 9001]); // Console logs "✅Assertion Passed✅: [42, 1337, 9001] === [42, 1337, 9001]"
```
### **`assertEqual(actual, expected)`**
Compares two values for equality and logs an assertion.

<b>Example:</b>

```javascript
_.assertEqual(420, 420); // Console logs "✅Assertion Passed✅: 420 === 420"
```
### **`assertObjectsEqual(actual, expected)`**
Compares two objects for equality and logs an assertion.

<b>Example:</b>

```javascript
_.assertObjectsEqual({ lol: 1, xd: 2 }, { lol: 1, xd: 2 }); // Console logs "✅Assertion Passed✅: { lol: 1, xd: 2 } === { lol: 1, xd: 2 }"
```
### **`countLetters(string)`**
Counts frequency of each letter in input, and returns them in an object.

<b>Example:</b>

```javascript
const letterCounts = _.countLetters("lighthouse in the house"); // Returns an object with frequency of letters: { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
```
### **`countOnly(allItems, itemsToCount)`**
Counts frequency of specified items in input, and returns them in an object.

<b>Example:</b>

```javascript
const countSpecific = _.countOnly(["a", "b", "a", "b", "c"], { a: true, b: true, c: false}); // Returns an object with frequency of letters with true/truthy value only. In this case would return 2 for a, 2 for b, but nothing for c (false value).
```
### **`eqArrays(arr1, arr2)`**
Compares two arrays for deep equality.

<b>Example:</b>

```javascript
_.eqArrays([42, 1337, 9001], [42, 1337, 9001]); // Returns true
```
### **`eqObjects(obj1, obj2)`**
Compares two objects for deep equality.

<b>Example:</b>

```javascript
_.assertObjectsEqual({ lol: 1, xd: 2 }, { lol: 1, xd: 2 }); // Returns true
```
### **`findKey(object, callback)`**
Returns the first key that satisfies the callback's conditional.

<b>Example:</b>

```javascript
const keyResult = _.findKey({ Hercule: 2, Monaka: 0, Scouter_Reading: 9001 }, x => x > 9000); // Returns "Scouter_Reading"
```
### **`findKeyByValue(object, value)`**
Returns the first key with the given value.

<b>Example:</b>

```javascript
const keyResult = _.findKeyByValue({ me: 1, myself: 2, I: 3 }, 2); // Returns "myself"
```
### **`flatten(array)`**
Returns a new array after joining all nested array values into the one new array.

<b>Example:</b>

```javascript
const flattenedArr = _.flatten([[1, 2], [[[3, 4]], [5, 6]]]); // Returns [1, 2, 3, 4, 5, 6]
```
### **`head(array)`** :
Returns the first element (index 0) of a passed through array.

<b>Example:</b>

```javascript
const firstElement = _.head(["something", "is", "here"]); // Returns "something"
```
### **`letterPositions(sentence)`**
Returns an object containing arrays of indices for each letter in the input sentence.

<b>Example:</b>

```javascript
const positions = _.letterPositions("lighthouse in the house"); // Returns an object with arrays of indices corresponding to the letter appearances
```
### **`map(array, callback)`**
Returns a new array complying with the modification passed in the callback.

<b>Example:</b>

```javascript
const mapArr = _.map(["in", "carnage", "i", "bloom", ",", "like", "a", "flower", "in", "the", "dawn", "."], word => word[0]); // Returns ["i", "c", "i", "b", ",", "l", "a", "f", "i", "t", "d", "."]
```
### **`middle(array)`**
Returns a new array containing the middle element(s) of the input array.

<b>Example:</b>

```javascript
const midArr1 = _.middle([1, 2, 3, 4, 5]); // Returns [3] due to odd number of elements.
const midArr2 = _.middle([1, 2, 3, 4]); // Returns [2, 3] due to even number of elements.
```
### **`tail(array)`** :
Returns a new array with every element apart from the first one (index 0).

<b>Example:</b>

```javascript
const tailArr = _.tail(['Hello', 'Lighthouse', 'Labs']); // Returns ['Lighthouse', 'Labs']
```
### **`takeUntil(array, callback)`**
Returns a new array containing elements from the original array up until (but not including) the element that verifies (returns true) the callback.

<b>Example:</b>

```javascript
const takeArr = _.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ","); // Returns ["I've", "been", "to", "Hollywood"]
```
### **`without(source, itemsToRemove)`**
Returns a new array containing elemnets from the original array but without any elements specified in the passed array.

<b>Example:</b>

```javascript
const withoutArr = _.without([1, 2, 3], [1]); // Returns [2, 3]
```