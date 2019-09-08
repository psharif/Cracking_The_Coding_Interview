const pal_perm = str => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const hash = {};
  	for(let s of str.toLowerCase()){
      	if(alphabet.indexOf(s) !== - 1 ) {
    		    hash[s] = hash[s] + 1 || 1;
        }
    }

  	console.log(hash);
  	let odd = 0;

  	for(let key in hash){
    	if(hash[key] % 2 == 1)
          odd++;
    }
  	console.log(odd <= 1);
  	return odd <= 1;
}

pal_perm("Coca acoC");

pal_perm("This is not");

pal_perm("taco cat");
