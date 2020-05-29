function limitNumber(num, rangeLow, rangeHigh) {
    if (num >= Math.min(rangeLow) && num<= Math.max(rangeHigh)){
        return num;
    }if (num <Math.min(rangeLow)){
        return Math.min(rangeLow);
    }else {
        return Math.max(rangeHigh);
    }
    }