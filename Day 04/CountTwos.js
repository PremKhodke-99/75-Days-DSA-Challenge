function countTwos(N){
    let count = 0;

    for(let i = 1; i <= N; i++){
        let s = i.toString();
        for(let digit of s){
            if(digit === '2'){
                count++;
            }
        }
    }
    return count;
}

function main(){
    let n = 222;
    console.log(countTwos(n));
}

main();