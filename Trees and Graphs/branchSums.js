
const solution = (arr) => {
    // Type your solution here
    if(arr.length == 0) {
        return "";
    }
    let rightSum = arr[0];
    let leftSum = arr[0];
    let increment = 1;
    let i = 1;

    while (i < arr.length) {
        leftSum += arr.slice(i, i + increment).reduce((a,b)=> a + b, 0);
        i += increment;

        rightSum += arr.slice(i, i + increment).reduce((a,b)=> a + b, 0);
        i += increment;

        increment++;
    }

    if(rightSum > leftSum){
        return "Right";
    }
    else if(rightSum < leftSum){
        return "Left";
    }
    return "";
};
