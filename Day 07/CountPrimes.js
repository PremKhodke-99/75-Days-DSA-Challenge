let flag = (n) => {
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true;
}

function countPrimes(n){
    let count = 0;
    for(let i = 2; i < n; i++){
        if(flag(i)) count++;
    }
    return count;
}

function main(){
    const n = 10;
    console.log(countPrimes(n));
}

main();