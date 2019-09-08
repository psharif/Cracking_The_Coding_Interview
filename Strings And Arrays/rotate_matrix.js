const rotate_matrix = matrix => {

	if(matrix.length <= 0 || matrix.length !== matrix[0].length)
    return [0];

  //console.log(matrix);

	const n = matrix.length;

	for(let layer = 0; layer < n / 2; layer++) {
    	/// Keeps track of which layers we are on
      let first = layer;
      let last = n - 1 - layer;

      for(let i = first; i < last; i++){
        /// Keeps track of where to decrement for left and bottom.
        let offset = i - first;

        let top = matrix[first][i];

        /// top = left
        matrix[first][i] = matrix[last - offset][first];

        /// left = bottom
        matrix[last - offset][first] = matrix[last][last - offset];

        //bottom = right
        matrix[last][last - offset] = matrix[i][last]

        ///right = top
        matrix[i][last] = top;
      }
    }

  	print_matrix(matrix);
  	return matrix;
}

const print_matrix = matrix => {
	for(let i = 0; i < matrix.length; i++) {
    	console.log(matrix[i]);
    }
}

var m = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

var m2 = [[1,2,3],[4,5,6],[7,8,9]];

rotate_matrix(m);

console.log();

rotate_matrix(m2);
