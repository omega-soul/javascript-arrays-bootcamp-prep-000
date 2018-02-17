var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["foo", 1];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return  new Array(element, 1);
}

destructivelyAddElementToBeginningOfArray.unshift(element);