function findEvenNums(num) {
	let even = [];
	for (i=1; i <= num; i++){
		even.push(i)
	}
	even = even.filter(x=> x%2 ==0);
	return even;
}