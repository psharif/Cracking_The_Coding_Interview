// Given a string and an integer k,
// you need to reverse the first k characters for every 2k
// characters counting from the start of the string.
// If there are less than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and left the other as original.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverseStr = (s, k) => {
  let arr = s.split("");
  let rev;

  for (let i = 0; i < arr.length; ) {
    rev = s
      .slice(i, i + k)
      .split("")
      .reverse();

    arr.splice(i, rev.length, ...rev);

    i += 2 * k;
  }

  return arr.join("");
};

console.log(reverseStr("surveysend", 3));
