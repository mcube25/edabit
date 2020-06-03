function cars(wheels, bodies, figures) {
	let numWheels = Math.floor(wheels / 4);
	let numFigures = Math.floor(figures / 2);
	return Math.min(numWheels, bodies, numFigures);
}