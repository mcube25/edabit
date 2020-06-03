function isPalindrome(n) {
	return String(n).split('').reverse().join('') == String(n);
}