/*
Implement a regular expression function isMatch that supports the '.' and '*' symbols. The function receives two strings - text and pattern - and should return true if the text matches the pattern as a regular expression. For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

In case you aren’t familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.' is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter (see fourth and fifth examples). For more information on regular expression matching, see the Regular Expression Wikipedia page.

Explain your algorithm, and analyze its time and space complexities.

Examples:

input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "abbb", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true
Constraints:

[time limit] 5000ms
[input] string text
[input] string pattern
[output] boolean

*/

function isMatch(text, pattern) {
  // your code goes here

  /// Loop through pattern string.
  //text[i] == pattern[i]
  // text = "abbb", pattern = "ab*"
    // text = "abbc", pattern = "ab*c"
  // text = "ac", pattern = "ab*c"
  // text = "bbb", pattern = "b*"
  /// .
  /// * text
  /// text = ab   pattern = ab.

  let t = 0, p = 0;

    // text = 'aa'  pattern = 'a'
    // text = "aba", pattern = "a.a"
  while( t < text.length || p < pattern.length) {
      if(pattern[p + 1] == '*') {
        let repeat = pattern[p];
        if(repeat == '.') {
          repeat = text[t];
        }
        while(text[t] == repeat) {
          t++;
        }

        p += 2;
      }
      else if(pattern[p] == '.' || text[t] == pattern[p]) {
        p++;
        t++;
      }
      else {
        return false;
      }
  }

  return true;
}
