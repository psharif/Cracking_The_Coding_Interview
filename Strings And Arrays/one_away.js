const oneEditAway = (str1, str2) =>{
  let bool = false;

  if(str1.length == str2.length){
    bool = oneReplace(str1, str2);
  }
 	else if(str1.length-1 == str2.length){
  	bool = oneInsert(str2, str1);
  }
	else if(str1.length+1 == str2.length){
  	bool = oneInsert(str1, str2);
  }

	console.log(bool);
	return bool;
}

const oneReplace = (s1, s2) => {
	let difference = false;

  for(let i = 0; i < s1.length; i++){
  	if(s1[i] !== s2[i]) {
      // Difference was already found once.
      if(difference){
        return false;
      }
      difference = true;
    }
  }
	return true;
}

const oneInsert = (s1, s2) => {
  let index1 = 0, index2 = 0;

	while(index1 < s1.length && index2 < s2.length) {
  	console.log(s1[index1]);
  	console.log(s2[index2]);
  	console.log(index1);
  	console.log(index2);
  	if(s1[index1] !== s2[index2]) {
    	if(index1 !== index2){
        return false;
      }
      index2++;
    }
    else {
      index2++;
      index1++;
    }
  }

  return true;
}

oneEditAway("ple", "pale");

oneEditAway("pale", "bale");

oneEditAway("pale", "bole");

oneEditAway("ble", "pale");
