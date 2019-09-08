const zero_matrix = matrix => {
  let zeroFirstCol = false;
  let zeroFirstRow = false;

	console.log("Original Matrix");
	print_matrix(matrix);
	console.log();
	console.log();

	// Check if First Row has 0
	for(let col = 0; col < matrix[0].length; col++){
  	if(matrix[0][col] == 0){
      	zeroFirstRow = true;
        	break;
      }
  }

	//Check if first Col has 0
	for(let row = 0; row < matrix.length; row++){
  	if(matrix[row][0] == 0){
      	zeroFirstCol = true;
        	break;
      }
  }

	console.log("This shows if there are zeroes in the first row/col");
	console.log("Zero Row", zeroFirstRow);
	console.log("Zero Col", zeroFirstCol);
	console.log();
	console.log();

	/// If any other element in the matrix is 0
	/// Set the first row with that col to 0.
	/// Set thr first col with that row to 0.
	for(let row = 1; row < matrix.length; row++){
    for(let col = 1; col< matrix[0].length; col++){
      if(matrix[row][col] == 0){
      	matrix[row][0] = 0;
        	matrix[0][col] = 0;
      }
    }
  }

	console.log("Matrix with first row/col zeroes set");
	print_matrix(matrix);
	console.log();
	console.log();

  //Check if first Row has zeroes
	// If it does set the columns to 0
	for(let i = 0; i < matrix[0].length; i++){
  	if(matrix[0][i] == 0){
      	//Left off here.
        	for(let col = 0; col < matrix.length; col++){
          	matrix[col][i] = 0
          }
      }
  }


  //Check if first Col has zeroes
	// If it does set the rows to 0
	for(let i = 0; i < matrix.length; i++){
    if(matrix[i][0] == 0){
      //Left off here.
    	for(let row = 0; row < matrix[0].length; row++){
      	matrix[i][row] = 0
      }
    }
  }

	console.log("Matrix with zeroes set for columns and row except the first ones");
	print_matrix(matrix);
	console.log();
	console.log();


	/// Check if first row has zero
	/// If it does set first row to 0
	if(zeroFirstRow){
    //Left off here.
    for(var col = 0; col < matrix[0].length; col++){
      matrix[0][col] = 0
    }
  }

	/// Check if first col has a zero
	/// If it does set first col to zero
	if(zeroFirstCol){
    //Left off here.
    for(var row = 0; row < matrix.length; row++){
      matrix[row][0] = 0
    }
  }

  console.log("All the zeroes set");
	print_matrix(matrix);
}


var print_matrix = matrix => {
	for(var i = 0; i < matrix.length; i++) {
    	console.log(matrix[i]);
    }
}

zero_matrix([[1,1,1,1,0],[1,1,0,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,0,0,1,1]]);
