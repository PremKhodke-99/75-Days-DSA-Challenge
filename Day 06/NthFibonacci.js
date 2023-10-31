function nthFibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }

    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

function main(){
    let n = 7;
    let result = nthFibonacci(n);
    console.log(result);
}

main();