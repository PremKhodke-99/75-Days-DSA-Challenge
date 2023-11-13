var firstAndLastPosition = (nums, target) => {
    let output = [-1, -1];

    let left = 0, right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    if(nums[left] != target){
        console.log(output);
        return;
    }

    output[0] = left;

    right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left + right)/2) + 1;

        if(nums[mid] <= target){
            left = mid;
        }else{
            right = mid - 1;
        }
    }

    output[1] = right;

    console.log(output);
}

let nums = [1, 2, 2, 3, 4], target = 1;
firstAndLastPosition(nums, target);