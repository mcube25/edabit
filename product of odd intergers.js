function oddProduct(arr) {
	let x = arr.filter (x=>x%2 !==0);
	return x.reduce((odd, num)=> odd* num)
}