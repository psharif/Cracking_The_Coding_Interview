// Complete the isValid function below.
function isValid(s) {
    const hash = {};

    for(let ch of s ){
        hash[ch] = hash[ch] + 1 || 1;
    }

    let values = Object.values(hash);
    const set1 = new Set(values);

    console.log(set1); 

    if(set1.size > 2){
      return "NO"
    }else if(set1.size == 1){
      return "YES";
    }

    let filteredValues = values.filter((el) => values[0] !== el);
    let result = "NO";

    console.log(filteredValues);

    if(filteredValues.length == 1) {
        if(filteredValues[0] - 1 === values[0] || filteredValues[0] - 1 == 0)
            result = "YES";
    }
    else if(values.length - filteredValues.length == 1) {

        if(values[0] - 1 === filteredValues[0] || values[0] - 1 == 0)
            result = "YES";
    }

    return result;
}

isValid('xxxaabbccrry');
