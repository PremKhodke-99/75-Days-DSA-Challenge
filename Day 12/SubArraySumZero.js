;const nums1 = [4,2,-2,5]
const nums2 = [3,2,-1];

var subArraySumZero = (nums) => {

    for(let i = 0; i < nums.length; i++){
        let sum = nums[i];
        if(sum === 0){
            console.log("Yes");
            return;
        }
        for(let j = i + 1; j < nums.length; j++){
            sum += nums[j];
            if(sum === 0){
                console.log("Yes");
                return;
            }
        }
    }
    console.log("No");
}

subArraySumZero(nums1);
subArraySumZero(nums2);

