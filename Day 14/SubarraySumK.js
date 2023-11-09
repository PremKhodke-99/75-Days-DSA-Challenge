var longestSubarrayHavingSumK = (N, K, nums) => {

    let map = new Map();
    let sum = 0, len = 0;

    for(let i = 0; i < N; i++){
        sum += nums[i];

        if(sum == K){
            len = i + 1;
        }
        if(!map.has(sum)){
            map.set(sum, i);
        }
        if(map.has(sum - K)){
            len = Math.max(len, i - map.get(sum - K));
        }
    }
    console.log(len);
}

let nums = [10, 5, 2, 7, 1, 9], n = nums.length, k = 15;
longestSubarrayHavingSumK(n, k, nums);