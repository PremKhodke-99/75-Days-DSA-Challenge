var zeroOnes = (nums) => {
    // let ind = nums.indexOf(0);
    // console.log(ind);

    let i = 0, j = nums.length - 1, res = -1;

    let target = 1;

    while(i <= j){
        let mid = Math.floor((i+j)/2);
        if(nums[mid] == target){
            res = mid;
            j = mid  - 1;
        }else if(nums[mid] < target){
            i = mid + 1;
        }else{
            j = mid - 1;
        }
    }

    console.log(res);
}

let nums = [0, 0, 1, 1];
zeroOnes(nums);