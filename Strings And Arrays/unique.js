const unique = (str) => {
	const hash = {};

  	for (let s of str){
    	if(hash[s] == true){
          console.log("false");
          return false;
        }
      	hash[s] = true;
    }
  	console.log(hash);
  	return true;
}

const unique2 = (str) => {
    for(let i = 0; i < str.length - 1; i++) {
    	for(let j = i + 1; j < str.length; j++) {
        	if(str[i] == str[j]) {
              console.log("false");
              return false;
            }
        }
    }
    console.log("true");
  	return true;
}

const unique3 = (str) => {

  	const sort = str.split("").sort();

    for(let i = 0; i < sort.length - 1; i++) {
    	if(sort[i] == sort[i+1]) {
        	console.log("false");
          	return false;
        }
    }
    console.log("true");
  	return true;
}

unique("abcde");
unique('76547');

// unique2("abcde");
// unique3("abcde");
