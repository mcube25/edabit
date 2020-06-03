function stupidAddition(a, b) {
	var y = (typeof a == 'string');
	var z = (typeof b == 'string');
	if (y && z) return Number(a)+Number(b);
	if (!y && !z) return String(a)+String(b);
	return null;
}