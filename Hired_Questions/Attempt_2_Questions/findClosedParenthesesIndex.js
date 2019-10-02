/// In most text editors, when you select an open parentheses
/// the editor will highlight the corresponding closing parentheses
/// Write a function that implements this feature. Specifically,
/// given a valid parenthetical expression, parentheses, and the
/// index of an open parenthesis, index, return the index of the
/// closing parenthesis. If the index of a closing parenthesis is
/// specified return -1.

const findClosedParenthesesIndex = (parentheses, index) => {
    // Type your solution here
    if(parentheses[index] == ")")
        return -1;
    const stack = [parentheses[index]];
    /// Iterate through the parenthesis string.

    for(let i = index + 1; i <= parentheses.length; i++) {
        if(parentheses[i] == '(')
            stack.push(parentheses[i]);
        else
            stack.pop()

        if(stack.length == 0) {
            return i;
        }
    }

    return -1;
};
