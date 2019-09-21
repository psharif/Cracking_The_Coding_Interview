// In this question we’ll implement a function root that calculates
// the n’th root of a number. The function takes a nonnegative number
// x and a positive integer n, and returns the positive n’th root of
// x within an error of 0.001 (i.e. suppose the real root is y,
// then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).


/// Simple implementation using a binary search like algorithm.
function root(x, n) {
  //console.log(x);
  // your code goes here
  if(x == 0){
    return 0;
  }
  /// Declare three variables
  let lowerBound = 0;
  let upperBound = x;
  /// Find the approximate root using upperbound + lowerbound / 2
  let approxRoot = (upperBound + lowerBound) / 2;

  /// While approxRoot - lowerBound by more than 0.001 decimals.
  while(approxRoot - lowerBound >= 0.001) {
    /// Multiply the power of approxRoot by n
    /// if it larger than x. upperbound becomes approxRoot.
    if(Math.pow(approxRoot, n) > x) {
      upperBound = approxRoot;
    }
    /// if it lower than x. upperbound becomes approxRoot.
    else if(Math.pow(approxRoot, n) <= x ) {
      lowerBound = approxRoot;
    }
    /// Divide approxRoot by the same formula.
    approxRoot = (upperBound + lowerBound) / 2;
  }
  /// Return approxRoot
  return approxRoot;
}
