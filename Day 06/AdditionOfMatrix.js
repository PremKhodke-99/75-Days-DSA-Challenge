function addMatrix(matrix1, matrix2){
    let m = matrix1.length, n = matrix1[0].length;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            matrix1[i][j] += matrix2[i][j];
        }
    }

    return matrix1;
}

function main(){
    let matrix1 = [[1,2],[3,4]];
    let matrix2 = [[1,1],[1,1]];

    let res = addMatrix(matrix1, matrix2);
    res.forEach(mat => {
        console.log(mat);
    });
}

main();