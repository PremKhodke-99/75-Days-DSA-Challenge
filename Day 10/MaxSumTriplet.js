function maxSumTriplet(arr){
    let ans = 0, n = arr.length;

    for(let j = 1; j < n-1; j++){
        let first = -1, third = -1;

        for(let i = 0; i < j; i++){
            if(arr[i] < arr[j] && arr[i] > first)
                first = arr[i];
        }

        // console.log(ans)
        for(let k = j + 1; k < n; k++){
            if(arr[k] > arr[j] && arr[k] > third)
                third = arr[k];
        }

        if(first != -1 && third != -1)
            ans = Math.max(ans ,first + arr[j] + third);
        console.log(ans)
        
    }

    return ans;
}

function main(){
    let arr = [3, 7, 4, 2, 5, 7, 5];
    let maxSum = maxSumTriplet(arr);
    console.log(maxSum);
}

main();