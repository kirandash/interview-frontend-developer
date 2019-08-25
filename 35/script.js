(function(){
    // Sum of perimeter in a matrix
    const matrix = [
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ];
    // Output: 8
    // Solution: Take sum or first row, last row, first column and last column and remove the corner items
    let sum = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Iterate over first row
    for(i = 0; i<cols; i++){
        sum += matrix[0][i];
    }

    // Iterate over Last row
    for(i = 0; i<cols; i++){
        sum += matrix[rows - 1][i];
    }

    // Iterate over First column
    for(i = 0; i<rows; i++){
        sum += matrix[i][0];
    }

    // Iterate over Last column
    for(i = 0; i<rows; i++){
        sum += matrix[i][rows-1];
    }

    // Remove edges
    sum = sum - (matrix[0][0] + matrix[0][cols-1] + matrix[rows - 1][0] + matrix[rows - 1][cols - 1]);
    console.log(sum); // 8
})();