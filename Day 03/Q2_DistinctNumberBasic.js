function distinctNumber(array){
    let set = new Set();

    for(let e of array){
        set.add(e);
    }

    return set.size;
}

function main(){
    let arr = [2, 2, 3, 2, 3, 4, 4, 3, 2, 2, 10, 10];
    let res = distinctNumber(arr);
    console.log('Distint numbers in an array are', res);
}

main();