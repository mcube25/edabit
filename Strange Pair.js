const isStrangePair = (str1, str2)=> str2.endsWith(str1.charAt(0)) 
&& str1.endsWith(str2.charAt(0));