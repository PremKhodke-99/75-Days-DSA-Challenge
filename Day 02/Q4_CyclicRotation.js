function cyclicRoation(arr, k){
    let copy = [...arr]; // [1, 2, 3, 4, 5]
    for(let i = 0; i < arr.length; i++){
        let ele = (i + k)%copy.length; //(0 + 2)%5 = 2, (1 + 2)%5 = 3, (2 + 2)%5 = 4, (3+2)%5 = 0, (4+2)%5 = 1
        arr[ele] = copy[i]; //arr[2] = 1, arr[3] = 2, arr[4] = 3, arr[0] = 4, arr[1] = 5 ====> [4, 5, 1, 2, 3]
    }
    return arr;
}

function main(){
    let arr = [1, 2, 3, 4, 5];
    let k = 2;
    let res = cyclicRoation(arr, k);
    console.log(res);
}

main();