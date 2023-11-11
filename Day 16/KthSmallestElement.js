let matrix = [[1, 5, 9],
[10, 11, 13],
[12, 13, 15]], k = 6;

KthSmallestElementInMatrix(matrix, k);

function KthSmallestElementInMatrix(matrix, k){
    let m = matrix.length, n = matrix[0].length;
    let beg = 0, end = matrix[m-1][n-1];
    let ans = end;

    while(beg <= end){
        let mid = Math.floor((beg + end)/2);
        let lessOrEqual = countOfElementLessEqual(matrix, mid);
        if(lessOrEqual === k){
            ans = mid;
            end = mid - 1;
        }else if(lessOrEqual < k){
            beg = mid + 1;
        }else{
            ans = mid;
            end = mid - 1;
        }
    }

    console.log(ans);
}

function countOfElementLessEqual(matrix, ele){
    let n = matrix.length;
    let count = 0;

    for(let row = 0; row < n; row++){
        if(matrix[row][0] > ele){
            break;
        }
        else if(matrix[row][n-1] <= ele){
            count += n;
        }else{
            count += findLessOrEqual(matrix[row], ele);
        }
    }
    
    return Math.floor(count);
}

function findLessOrEqual(row, ele){
    let count = 0;
    for(let col = 0; col < row.length; col++){
        if(row[col] > ele){
            break;
        }
        count++;
    }
    return count;
}