function incrementNumber(arr){
    let carry = 1;

    for(i = arr.length - 1; i >= 0; i--){
        let sum = arr[i] + carry;
        arr[i] = sum % 10;
        if(sum >= 10) carry = 1;
        else carry = 0;
    }

    if(carry){
        return [1].concat(arr);
    }
    return arr;
}

function main(){
    let arr = [9, 9, 9];
    let res = incrementNumber(arr);
    console.log(res);
}

main();