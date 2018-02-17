var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["foo", 1];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = ["foo", 1];
  return  new Array("foo", ...array);
}

destructivelyAddElementToBeginningOfArray();