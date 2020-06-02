function nthSmallest(arr, n) {
	let sortedArray = arr.sort();
	return sortedArray[n-1] || null;
}