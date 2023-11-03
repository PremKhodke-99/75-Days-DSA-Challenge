function isPermutationPalindrome(s){

    let map = new Map();
    for(let e of s){
        map.set(e, (map.get(e) || 0) + 1);
    }

    let oddCount = 0;
    for(let [key,value] of map){
        if(value % 2 !== 0){
            oddCount++;
        }
    }

    if(oddCount <= 1) return true;
    return false;
}

function main(){
    let s = 'nnaamm';
    console.log(isPermutationPalindrome(s));
}

main();