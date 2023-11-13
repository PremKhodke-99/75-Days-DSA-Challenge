var missingNumber = (nums) => {
    let set = new Set(nums);

    for(let i = 0; i < Infinity; i++){
        if(!set.has(i)){
            console.log(i);
            break;
        }
    }
}

let nums = [3, 0, 2, 4];
missingNumber(nums);