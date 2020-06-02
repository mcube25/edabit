function profitMargin(costPrice, salesPrice) {
	let profit = (salesPrice - costPrice)/salesPrice;
	let realProfit = profit * 100;
	return realProfit.toFixed(1)+"%"
}