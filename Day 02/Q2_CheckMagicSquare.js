function checkMagicSquare(matrix){
    let n = matrix.length;
    let diagonal1 = 0, diagonal2 = 0, row = 0, col = 0;

    for(let i = 0; i < n; i++){
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][n - i - 1];
    }
    
    if(diagonal1 !== diagonal2) return false;

    for(let i = 0; i < n; i++){
        row = 0;
        col = 0;
        for(let j = 0; j < n; j++){
            row += matrix[i][j];
            col += matrix[j][i];
        }
        if(diagonal1 !== row || diagonal2 !== col){
            return false;
        }
    }

    return true;
}

function main(){
    let matrix = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];

    if(checkMagicSquare(matrix))
        console.log('It is a Magic Square');
    else
        console.log('It is not a Magic Square');
    
}

main();
