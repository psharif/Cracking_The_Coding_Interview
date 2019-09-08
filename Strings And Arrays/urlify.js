const urlify = (str) => {
  let arr = str.split('');

  for(let i = 0; i < arr.length; i++){
  	if(arr[i] == " ") {
    	for(let j = arr.length - 3; j > i; j--){
        	arr[j + 2] = arr[j];
        }
      	arr[i] = '%';
      	arr[i+1] = '2';
      	arr[i+2] = '0';
      	//console.log(arr);
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}

const urlify2 = str => {
  let newStr = str;

  for(let i = 0; i < newStr.length; i++) {
    	if(newStr[i] == " "){
        	newStr = newStr.slice(0, i) + "%20" + newStr.slice(i+1, newStr.length - 2);
         //console.log(newStr);
        }
    }
  	console.log(newStr);
  	return newStr;
}

const urlify3 = (str, truelength) => {
  let arr = str.split("");
  let index = str.length - 1;

	for(let i = truelength - 1; i >= 0; i--){
    if(arr[i] == ' ') {
    	arr[index] = '0'
      arr[index-1] = '2';
      arr[index-2] = '%';
      //console.log(arr);
      index = index - 3;
    }else{
      arr[index] = arr[i];
      //console.log(arr);
    	index--;
    }
  }

	console.log(arr.join(""));
	return arr.join("");
}


urlify('May is in spring      ');

urlify2('May is in spring      ');

urlify3('May is in spring      ', 16);
