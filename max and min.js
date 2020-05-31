//Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(nums) {
	var a = Math.max(...nums);
	var b = Math.min(...nums);
	var diff = a-b;
	return diff;
}
const difference = nums=> Math.max(...nums)-Math.min(...nums);