// Given a package with a weight limit limit and an array arr of item weights,
// implement a function getIndicesOfItemWeights that finds two items whose sum of
// weights equals the weight limit limit.
// Your function should return a pair [i, j] of the indices of the item weights,
// ordered such that i > j. If such a pair doesn’t exist, return an empty array.
// Analyze the time and space complexities of your solution.

//input:  arr = [4, 6, 10, 15, 16],  lim = 21

//output: [3, 1] # since these are the indices of the
//               # weights 6 and 15 whose sum equals to 21

function getIndicesOfItemWeights(arr, limit) {
  /// Create a hash to keep track of the current element and it's index.
  const hash = {};
  let complement;

  for(let i = 0; i < arr.length; i++) {
    /// Find the complement of the the current element with the limit.
    complement = limit - arr[i];
    /// If a hash[complement] does not equal 0
    if( hash[complement] !== undefined ) {
      /// it means the complement is in the hash
      /// return the index of the array and the complement's index.
      return [i, hash[complement]];
    }
    else {
      /// Place the value of the array and it's index in the hash
      hash[arr[i]] = i;
    }
  }
  /// Return empty array
  return [];
}
