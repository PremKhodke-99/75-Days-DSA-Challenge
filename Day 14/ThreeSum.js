var threeSum = (nums) => {

    const result = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++){
        if(i === 0 || nums[i] !== nums[i-1]){
            let s = i + 1,  e = nums.length - 1, sum = 0 - nums[i];
            while(s < e){
                if(nums[s] + nums[e] === sum){
                    result.push([nums[i], nums[s], nums[e]]);
                    while(s < e && nums[s] === nums[s+1]){
                        s++;
                    }
                    while(s < e && nums[e] === nums[e-1]){
                        e--;
                    }
                    s++;
                    e--;
                }else if(nums[s] + nums[e] < sum){
                    s++;
                }else{
                    e--;
                }
            }
        }
    }

    console.log(...result);
}

let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);