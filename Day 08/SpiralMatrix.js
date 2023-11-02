function spiralMAtrix(n){
    let ans = new Array(n);
    for(let i = 0; i < n; i++){
        ans[i] = new Array(n);
    }

    let topRow = 0, bottomRow = n - 1;
    let leftCol = 0, rightCol = n - 1;
    let count = 1;

    while(count <= n*n){
        for(let i = leftCol; i <= rightCol; i++){
            ans[topRow][i] = count++;
        }
        topRow++;

        for(let i = topRow; i <= bottomRow; i++){
            ans[i][rightCol] = count++;
        }
        rightCol--;

        for(let i = rightCol; i >= leftCol; i--){
            ans[bottomRow][i] = count++;
        }
        bottomRow--;

        for(let i = bottomRow; i >= topRow; i--){
            ans[i][leftCol] = count++;
        }
        leftCol++;
    }
    return ans;
}

function main(){
    let n = 4;
    let res = spiralMAtrix(n);
    res.forEach(e => {
        console.log(e);
    })
}

main();