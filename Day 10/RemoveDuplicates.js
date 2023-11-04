function removeDuplicatesfromSortedArray(nums){
    let n = nums.length;
    let index = 1, count = 1;

    for(let i = 1; i < n; i++){
        if(nums[i] === nums[i-1])
            count++;
        else count = 1;

        if(count <= 2){
            nums[index++] = nums[i];
        }
    }

    return {
        newLength: index,
        newArr: nums
    }
}

function main(){
    let nums = [2,2,2,3,4,4,5];
    console.log(removeDuplicatesfromSortedArray(nums));
}

main();