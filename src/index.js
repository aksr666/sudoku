module.exports = solveSudoku = (matrix) => {
  if(solve(matrix)) return matrix;
}
  
const solve = (matrix, row = 0, col = 0) => {
  const cell = checkCell(matrix, row, col);
  row = cell[0];
  col = cell[1];
      
  if (row == -1) {   
    return true;
  }

  for (let num = 1; num <= 9; num++) {  
    if (checkAll(matrix, row, col, num)) {   
        matrix[row][col] = num;
      if (solve(matrix, row, col)) {              
        return true;
      }                   
      matrix[row][col] = 0;
    }
  }
  return false;
}


const checkCell = (matrix, row, col) =>  {
for (; row < 9 ; col = 0, row++) {
    for (; col < 9 ; col++) {
        if (matrix[row][col] == 0) {
            return [row, col];
        }
    }
}
return [-1, -1];
}

const checkAll = (matrix, row, col, num) => checkRow(matrix, row, num) && checkCol(matrix, col, num) && checkBox(matrix, row, col, num);





const checkBox = (matrix, row, col, num) => {
row = Math.floor(row / 3) * 3;
col = Math.floor(col / 3) * 3;
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    if (matrix[row + r][col + c] == num) {
      return false;
    }
  }
}
  return true; 
}

const checkRow = (matrix, row, num) => {
for (let col = 0; col < 9; col++) {
  if (matrix[row][col] == num) {
    return false;
  }  
}
return true;
}

const checkCol = (matrix, col, num) => {
for (let row = 0; row < 9; row++) {
  if (matrix[row][col] == num) {
    return false;
  }  
}
return true;
}