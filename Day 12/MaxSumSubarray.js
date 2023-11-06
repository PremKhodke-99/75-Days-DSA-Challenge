const nums = [100,200,300,400], n = nums.length, k = 2;

var maximumSumSubarray = (n, nums, k) => {
    if( k == 1 && n == 1){
        console.log(nums[0]);
        return;
    }
    let start = 0;
    let maxSum = -Infinity;
    let sum = 0;

    for(let end = 0; end < n; end++){
        sum += nums[end];

        if(end - start + 1 == k){
            maxSum = Math.max(maxSum, sum);
            sum -= nums[start];
            start++;
        }
    }
    console.log("Maxsum", maxSum);
}

maximumSumSubarray(n, nums, k);