var peakElement = (n, nums) => {
    let left = 0, right = n - 1;

    while(left < right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid] > nums[mid + 1]){
            right = mid;
        }else{
            left = mid + 1;
        }
    }

    console.log(left);
}

let arr = [1,2,3,4,6,7,2,5], n = arr.length;
peakElement(n, arr);