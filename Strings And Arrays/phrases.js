/// Question from hackerrank for clutter.
/*Given a list of phrases, generate a list of Wheel of Fortune "Before and After" puzzles. "Before and After" puzzles are where one phrase ends with the last word of the first word of another.

Function Description
Complete the function generate_phrases in the editor below. The function returns an array of strings. generate_phrases has the following parameter(s):

generate_phrases(['writing code', 'code rocks']):  an array of strings
Runtime Performance Bonus
As a bonus... the ideal solution should aim to have a BEST case complexity of O(n). However this is not necessary for most of the test cases.

Constraints (and cases to not worry about)

Returned results do not have to be unique
Don't worry about casing: assume inputs are only a-z lower case letters with spaces (so no special characters or dealing with case matching words)
Assume all whitespace is just single spaces (so no need to worry about white spacing edge cases)
Input:
writing code
code rocks
Output
writing code rocks

Input
mission statement
a quick bite to eat
a chip off the old block
chocolate bar
mission impossible
a man on a mission
block party
eat my words
bar of soap

Output
a quick bite to eat my words
a chip off the old block party
chocolate bar of soap
a man on a mission statement
a man on a mission impossible

Input:
a b a
a c
Output
a b a c
*/

function generate_phrases(phrases) {
  const hash = {};
  const result = [];
  for (let i = 0; i < phrases.length; i++) {
    const firstWord = phrases[i].split(" ")[0];
    hash[firstWord] = phrases[i];
  }

  for (let i = 0; i < phrases.length; i++) {
    const lastWordArray = phrases[i].split(" ");
    const lastWord = lastWordArray[lastWordArray.length - 1];
    if (hash[lastWord]) {
      const substring = lastWordArray
        .slice(0, lastWordArray.length - 1)
        .join(" ");
      result.push(substring + " " + hash[lastWord]);
    }
  }
  //console.log(result);
  return result;
}

generate_phrases(["code rocks", "rocks suck", "suck eggs"]);
