function searchTarget(arr, k){
    let n = arr.length;
    let start = 0, end = n -1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] == k){
            return mid;
        }else if(arr[mid] < k){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}

function main(){
    let arr = [1, 3, 5, 7, 13], k = 13;
    let res = searchTarget(arr, k);
    console.log('Target element is present at index', res);
}

main();