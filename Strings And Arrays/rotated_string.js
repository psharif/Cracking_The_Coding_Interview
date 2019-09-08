const is_rotation = (s, r) => {
  if(s.length == r.length){
  	const s_twice = s + s;
    const result = s_twice.includes(r);
    console.log(result);
    return result;
  }
  console.log("different lengths");
  return false;
}

is_rotation("waterbottle", "erbottlewat");

is_rotation("waterbottle", "wottleaterb");
