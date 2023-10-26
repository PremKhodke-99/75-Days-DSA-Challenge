function naturalSum(n){
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
}

function main(){
    let n = 10;
    console.log(naturalSum(n));
}

main();