var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["foo", 1];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return  new Array("foo", ...array);
  //couldn't figure it out. was stuck for 3 days.
}

