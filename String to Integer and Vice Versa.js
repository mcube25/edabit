function toInt(str) {
	var text = str;
var integer = parseInt(text, 10);
	return integer;
}

function toStr(int) {
	return int.toString();
}
// using arrow function
const toInt = str=>parseInt(str);
const toStr = int => int.toString();