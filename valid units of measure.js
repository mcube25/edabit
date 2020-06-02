function hasValidUnitOfMeasure(product = {}) {
	const { unitOfMeasure, comment } = product
	return (!!(comment) ||unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}