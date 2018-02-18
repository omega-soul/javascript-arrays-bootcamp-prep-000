var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["foo", 1];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToBeginningOfArray(array, element) {
  return [array];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}