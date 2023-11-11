let nums = [-1,2,2,4,7], n = nums.length, k = 3;

function countOccurence(n,k,nums) {
    let res = 0
    let first = firstOccurence(n,k,nums);
    if(first == -1){
        res = 'Not Found';
        console.log(res);
        return;
    }
    let last = lastOccurence(n, k, nums);

    console.log(last - first + 1)
}

function firstOccurence(n, k, nums){
    let left = 0, right = n-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(nums[mid] == k && (mid == 0 || nums[mid - 1] < k )){
            return mid;
        }else if(k <= nums[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}

function lastOccurence(n,k,nums){
    let left = 0, right = n - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid] == k && (mid == n - 1 || nums[mid + 1] > k)){
            return mid;
        }else if(k >= nums[mid]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return - 1;
}

countOccurence(n, k, nums);