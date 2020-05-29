//given a string of claps return how many claps were made in total

const countClaps = str => str.split(/C/gi).length-1;