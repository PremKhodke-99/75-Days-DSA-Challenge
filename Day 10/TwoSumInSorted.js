function twoSumInSorted(arr, target){
    let left = 0, right = arr.length - 1;

    while(left < right){
        if(arr[left] + arr[right] < target)
            left++;
        else if(arr[left] + arr[right] > target)
            right --;
        else return true;
    }
    return false;
}

function main(){
    let arr = [1,2,4,6,8,9,19];
    let target = 12;
    let isPresent = twoSumInSorted(arr, target);

    if(isPresent) console.log('Present');
    else console.log('Not Present')
}

main();