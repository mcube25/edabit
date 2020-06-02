function correctStream(user, correct) {
	return user.map(x=>correct.indexOf(x)> -1? 1 : -1);
}