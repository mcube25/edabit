function minimumRemovals(arr) {
	if (arr.reduce((odd,even)=>(odd + even)%2!==0)){
		return 1;
	}else{return 0}
}