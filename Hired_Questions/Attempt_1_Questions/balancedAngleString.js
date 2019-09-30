/// Look for solution on
/// https://www.geeksforgeeks.org/convert-an-unbalanced-bracket-sequence-to-a-balanced-sequence/

/// Given a string of angle brackets, angles, such as "<<><>><<<>",
/// write a function that adds angle brackets to the beginning and
/// end to make all angle brackets match and return it.
/// The angle brackets "match" if for every < there is
/// corresponding >, and for every > there is a corresponding <.

/// Algorithm Solution
// Let us assume that whenever we encounter with opening bracket
// the depth increases by one and with a closing bracket the depth decreases by one.
// Find the maximum negative depth in minDep and add that number of ‘(‘ at the beginning.
// Then loop the new sequence to find the number of ‘)’s needed at the end of
// the string and add them. Finally, return the string.

const balancedAngleString= (angles) => {
    let dep = 0;
    let minDep = 0;
    let result = angles;

    for(let i = 0; i < angles.length; i++) {
      if(angles[i] == '<')
        dep++;
      else
        dep--;

      if(minDep > dep)
        minDep = dep
    }

    if(minDep < 0) {
      for(let i = 0; i < Math.abs(minDep); i++) {
        result = '<' + result;
      }
    }

    dep = 0;

    for(let i = 0; i < angles.length; i++) {
      if(angles[i] == '<')
        dep++;
      else
        dep--;
    }

    if(dep > 0) {
      for(let i = 0; i < dep; i++) {
        result += '>';
      }
    }

    console.log(result);
    return result;
};

balancedAngleString("<<><>><<<>");
balancedAngleString("><<><");
balancedAngleString(">>");
