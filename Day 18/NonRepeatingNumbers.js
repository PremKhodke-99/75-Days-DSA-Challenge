let arr = [2, 3, 7, 9, 11, 2, 3, 11];
let N = arr.length;

var twoNonRepeatingNumbers = (N,nums) => {
    let res = 0;
    for(let i = 0; i <N; i++){
        res = (res ^ nums[i]);
    }

    res = (res & -res);

    let sum1 = 0, sum2 = 0;

    for(let i = 0; i <N; i++){
        if((nums[i] & res) > 0){
            sum1 = (sum1 ^ nums[i]);
        }else{
            sum2 = (sum2 ^ nums[i]);
        }
    }

    let arr = [sum1>>>0, sum2>>>0];
    arr.sort((a,b) => a - b);
    console.log(arr);
}

twoNonRepeatingNumbers(N, arr);