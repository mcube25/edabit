function reverse(str) {
	if (str == ""){
		return str
	}else{
		return str.split("").reverse().join("");
	}
}