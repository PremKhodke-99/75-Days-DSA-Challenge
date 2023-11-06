let nums = [-2, -3, 4, -1, -2, 1, 5, -3];

var contiguousSequence = (nums) =>{
    let ans = -Infinity;
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(sum > ans){
            ans = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }

    console.log("Largest Sum", ans);
}

contiguousSequence(nums);