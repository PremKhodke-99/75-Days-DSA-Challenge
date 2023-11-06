var equalPartition = (nums) => {
    let n = nums.length;
    let prefix = [];

    let leftSum = 0;
    for(let i = 0; i < n; i++){
        prefix[i] = nums[i] + leftSum;
        leftSum = prefix[i];
    }

    leftSum = 0;
    for(let i = 0; i < n; i++){
        let rightSum = prefix[n - 1] - prefix[i];
        if(i != 0){
            leftSum = prefix[i - 1];
        }
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
}

let main = () => {
    let nums = [1,4,2,5];
    console.log("index", equalPartition(nums));
}

main();