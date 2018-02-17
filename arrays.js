var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["foo", 1];
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  return  new Array("foo", ...array);
}

destructivelyAddElementToBeginningOfArray();