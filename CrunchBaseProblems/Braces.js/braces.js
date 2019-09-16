
// Complete the braces function below.
function braces(values) {

    /// Use a stack to keep half of the braces the left ones.
    const result = [];
    let stack = [];
    //let bool = "YES";
    let val;
    ///If we hit a right brace pop of the brace from the stack and check that the match. (), {}, []
    for(let str of values) {
        stack = [];
        bool = "YES";
        for(let ch of str) {
            if(ch == '[' || ch == '{' || ch == '('){
                stack.push(ch);
            }
            else if(ch == ']' || ch == '}' || ch == ')') {
                console.log(stack);
                if(stack.length == 0) {
                    bool = "NO";
                    break;
                }

                val = stack.pop();
                if(ch == ']') {
                    if(val !== '[') {
                       bool = "NO";
                       break;
                    }
                }
                else if(ch == '}'){
                    if(val !== '{'){
                        bool = "NO";
                        break;
                    }
                }else if(ch == ')'){
                    if(val !== '('){
                        bool = "NO";
                        break;
                    }
                }
            }
        }
        console.log(bool);
        if(bool == "YES" && stack.length == 0) {
            bool = "YES";
        }
        result.push(bool);
    }
    console.log(result);
    /// At the very end make sure that stack is empty
    return result;
}

braces(["}][}}(}][))", "[](){()}", "()",
"({}([][]))[]()", "{)[](}]}]}))}(())(",
"([[)", ")"]);
