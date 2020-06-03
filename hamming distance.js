function hammingDistance(str1, str2) {
	let num=0;
for (let i=0; i<str1.length; i++){
	if (str1[i] !== str2[i]){
		num +=1;
	}
}
	return num
}