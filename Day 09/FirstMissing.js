function firstMissingPositive(arreBhai){
    // for(let i = 1; i < Infinity; i++){
    //     if(!arreBhai.includes(i)){
    //         return i;
    //     }
    // }

    // OR

    let set = new Set(arreBhai);

    for(let i = 1; i < Infinity; i++){
        if(!set.has(i)) return i;
    }

}

function main(){
    let arr = [3, 4, -1, 1];
    let res = firstMissingPositive(arr);
    console.log(res);
}

main()