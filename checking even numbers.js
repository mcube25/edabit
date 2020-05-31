//Create a function that takes in an array and returns true if all its values are even, and false otherwise.

function checkAllEven(arr) {
    return arr.every(x=> x % 2 === 0)
  }