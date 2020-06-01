function noOdds(arr) { 
	let four=[]
	arr.forEach(function(item){
		if (item%2==0){
			four.push(item)
		}
	})
	return four
}