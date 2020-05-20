/** create a function that takes the number of wins, draw and losses 
 and calculate the number of points a football team has obtained  A win receives 3 points, a draw 1 point and a loss 0 points. **/
 function footballPoints (win, draw, losses){
     var x = win * 3;
     var y = draw * 1;
     var z = losses * 0;
     return x + y + z
 }
 /** create a function that finds the perimeter of a rectangle using width and height **/
  function perimeterRectangle (width, height){
      var x = width * 2;
      var y = height * 2;
      return x + y
  }

  /** Create a function that takes an array and returns the first element. **/
  function firstInArray (arr){
var arr = [1, 2, 3];
return arr[0]
  }
  // function that adds two numbers
  function addition(a, b) {
	const y = a;
	const x =b;
	return y + x
}
// a function that increments a number by 1
function addition(num) {
    let a = num;
    return a+=1;
}
//function to convert minutes to seconds
function convert(minutes) {
    var h = minutes;
    var seconds = 60;
    return h * seconds;
}
// function to return true or false if num <= 0
function lessThanOrEqualToZero(num) {
	if (num <= 0){
        return true
    }else{
        return false
    }
}