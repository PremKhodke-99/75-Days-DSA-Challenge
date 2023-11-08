var sortArrayAbsolute = (arr) => {
    arr.sort((a,b) => {
        return Math.abs(a) - Math.abs(b);
    })

    console.log(arr);
}

let arrebhai = [2, -5, 1, -2, 4];
sortArrayAbsolute(arrebhai);