var minDiff = (num) => {
    let diff = Infinity;
    num.sort((a,b) => {
        a-b;
    });

    for(let i = 0; i < num.length -1; i++){
        let d = num[i + 1] - num[i];
        diff = Math.min(diff, d);
    }

    console.log(diff);
}

let arr = [1, 2, 4];
minDiff(arr);