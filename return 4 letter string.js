function isFourLetters(arr) {
	var four = [];
	arr.forEach(function(item){
		if (item.length == 4){
			four.push(item)
		}
	})
	return four;
}