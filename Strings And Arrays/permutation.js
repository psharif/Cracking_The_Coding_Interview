const perm = (s1, s2) => {
  	const hash1 = {}, hash2 = {};

    for(let s of s1) {
    	hash1[s] = hash1[s] + 1 || 1;
    }

    for(let s of s2) {
    	hash2[s] = hash2[s] + 1 || 1;
    }

  	console.log(hash1);
  	console.log(hash2);

  	for(let key in hash1 ) {
    	if(hash1[key] !== hash2[key]) {
          console.log("false");
          return false;
        }
    }
  	console.log("true");
  	return true;

}

const perm2 = (s1, s2) => {
	if(s1.length !== s2.length) {
      console.log("false");
      return false;
    }

  	if( s1.split("").sort().join("") === s2.split("").sort().join("") ){
    	console.log("true");
      	return true;
    }

  	console.log('false');
  	return false;
}

perm2("olofs", "fools");

perm("bal", "lab");

perm2("follow", "waffle");
