const compress = str => {
  let compress = "";
  let dup = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      dup++;
    } else {
      compress += str[i] + dup;
      dup = 1;
      //console.log(compress);
    }
  }
  const result = compress.length > str.length ? str : compress;
  console.log(result);
  return compress.length > str.length ? str : compress;
};

compress("aaabbbbccccdddeeee");
compress("bcd");
