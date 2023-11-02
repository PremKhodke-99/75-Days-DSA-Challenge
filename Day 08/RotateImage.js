function rotateImage(arre) {
    let n = arre.length;
    let ans = new Array(n)
    for(let i = 0; i < n; i++){
        ans[i] = new Array(n);
    }

    for(let i = 0; i < n; i++){
        for(let j = n - 1; j >= 0; j--){
            ans[j][i] = arre[n -i -1][j];
        }
    }
    return ans;
}

function main() {
    let arr = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    print(arr);
    let res = rotateImage(arr);
    print(res);

}

function print(arr){
    arr.forEach(element => {
        console.log(element);
    });
    console.log();
}

main();