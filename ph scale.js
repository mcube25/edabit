function pHName(pH) {
	if (pH <=0 || pH >=14){
		return "invalid"
	}
	if (pH <= 6.99){
		return "acidic"
	}else if(pH ===7 ){
		return "neutral"
	}else if (pH > 7 && pH < 14){
		return "alkaline"
	}
}