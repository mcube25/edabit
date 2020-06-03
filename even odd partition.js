function evenOddPartition(arr) {
	var evens = arr.filter(x=>x%2 === 0);
	var odds = arr.filter(x=>x%2 === 1);
	return [evens,odds];
	
}