/* Given a matrix of M x N elements (M rows, N columns),
return all elements of the matrix in diagonal order as
shown in the below image.

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (!matrix.length) return [];

  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const result = [];

  let row = 0,
    col = 0,
    dir = false;

  while (result.length < rowLength * colLength) {
    if (!dir) {
      dir = true;
      while (row >= 0 && col <= colLength - 1) {
        result.push(matrix[row][col]);
        row--;
        col++;
      }
      row++;
      if (col > colLength - 1) {
        col = colLength - 1;
        row++;
      }
    } else if (dir) {
      dir = false;
      while (row <= rowLength - 1 && col >= 0) {
        result.push(matrix[row][col]);
        row++;
        col--;
      }
      col++;
      if (row > rowLength - 1) {
        row = rowLength - 1;
        col++;
      }
    }
  }

  return result;
};
