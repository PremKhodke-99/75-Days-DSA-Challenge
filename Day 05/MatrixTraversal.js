function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, steps) {
    let m = matrix.length, n = matrix[0].length;
    let x = currPosRow, y = currPosCol;
    let result = [];

    for (let i = 0; i < steps; i++) {
        if (x < 0 || x >= m || y < 0 || y >= n) {
            // result.push(-1);
            // break;
            return [-1];
        }
        //right 
        if (dirToMove === 1) {
            if (y + 1 < n) {
                result.push(matrix[x][++y]);
            } else {
                result.push(-1);
                break;
            }
        }
        //down
        else if (dirToMove === 2) {
            if (x + 1 < m) {
                result.push(matrix[++x][y]);
            } else {
                result.push(-1);
                break;
            }
        }
        //left 
        else if (dirToMove === 3) {
            if (y - 1 >= 0) {
                result.push(matrix[x][--y]);
            } else {
                result.push(-1);
                break;
            }
        }
        //up 
        else if (dirToMove === 4) {
            if (x - 1 >= 0) {
                result.push(matrix[--x][y]);
            } else {
                result.push(-1);
                break;
            }
        }
    }
    // return result;
    if(result[result.length - 1] == -1){
        return [result[result.length - 1]];
    }else{
        return result;
    }
}

function main() {
    let matrix =
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]];
        // [[1, 2, 3, 4],
        // [5, 6, 7, 8],
        // [9, 10, 11, 12]];

    let [currPosRow, currPosCol] = [1, 1];
    let [dirToMove, steps] = [1, 1];

    let result = matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, steps);
    console.log(...result);
}

main();