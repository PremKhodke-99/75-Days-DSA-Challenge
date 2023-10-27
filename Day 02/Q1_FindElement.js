function findElement(arr, e){
    //Approach 1.
    const res = arr.findIndex(ele => ele === e);
    return res;

    //Approach 2.
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === e) return i;
    // }
    // return -1;
}

function main(){
    const arr = [1, 2, 3, 4, 1, 2];
    const e = 5;

    console.log(findElement(arr, e));
}

main();