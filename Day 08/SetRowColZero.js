function setMAtrixZero(matrix){
    let row = [], col = [];
    let m = matrix.length;
    let n = matrix[0].length;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] == 0){
                row.push(i);
                col.push(j);
            }
        }
    }

    let k = 0
    while(k < row.length){
        for(let i = 0; i < n; i++){
            matrix[row[k]][i] = 0;
        }
        k++;
    }
    k = 0;
    while(k < col.length){
        for(let i = 0; i < m; i++){
            matrix[i][col[k]] = 0;
        }
        k++;
    }
    return matrix;
}

function main(){
    let matrix = [[1,1,1],
                [1,0,1],
                [1,1,1]];
    print(matrix);
    setMAtrixZero(matrix);
    print(matrix);
}

function print(arr){
    arr.forEach(element => {
        console.log(element);
    });
    console.log();
}

main();