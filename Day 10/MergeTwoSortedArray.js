function mergeSortedArray(arr1, arr2){
    let m = arr1.length;
    let n = arr2.length;

    let ans = [];
    let i = 0, j = 0;

    while(i < m && j < n){
        if(arr1[i] <= arr2[j]){
            ans.push(arr1[i++]);
        }else{
            ans.push(arr2[j++]);
        }
    }

    while(i < m){
        ans.push(arr1[i++]);
    }
    while(j < n){
        ans.push(arr2[j++]);
    }

    return ans;
}

function main(){
    let arr1 = [1,2,3];
    let arr2 = [2,5,6];
    let result = mergeSortedArray(arr1, arr2);
    console.log(result);
}

main();