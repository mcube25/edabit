function operation(num1, num2) {
	let result;
	if (num1+num2 === 24){
		result="added"
	}else if (num1 - num2 === 24){
		result= "subtracted"
	}else if (num1 * num2 === 24){
		result = "multiplied"
	}else if (num1/num2 === 24){
		result = "divided"
	}else{
		result=null
	}
	return result;
}
