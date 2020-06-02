function filterStateNames(arr, type) {
	return arr.filter(x => (type === 'abb') ? x.length === 2 : x.length > 2);
}