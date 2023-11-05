function twoSum(arr, target){
    let hash = new Map();

    for(let i = 0; i < arr.length; i++){
        let tmp = target - arr[i];

        if(hash.has(tmp)){
            return [hash.get(tmp), i]
        }else{
            hash.set(arr[i], i);
        }
    }
    return [-1,-1];
}

function main(){
    let arr = [2,4,5,9,8];
    let target = 7;
    console.log(twoSum(arr, target)); 
}

main();