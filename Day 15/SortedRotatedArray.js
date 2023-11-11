var search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let res = -1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid] === target){
            res = mid;
            break;
        }else if(nums[left] <= right){
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(target >= nums[mid] && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    console.log(res)
}

let nums = [4, 5, 6, 9, 10, 2, 3], target = 3;
search(nums,target);