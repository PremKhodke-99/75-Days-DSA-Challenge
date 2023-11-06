const nums = [2, 3, 1, -4, 0, 6];
let n = nums.length;

var largestSubarraySumZero = (n, nums) => {
    
    let sum = 0, map = new Map(), index = [0,0];

    for(let i = 0; i < n; i++){
        sum += nums[i];  //2, 5, 6, 2, 2, 8

        if(sum == 0){
            index = [0,i];
        }else if(map.has(sum)){
            let diff1 = i - map.get(sum); //3 - 0 = 3, 4 - 0 = 4
            let diff2 = index[1] - index[0]; //0 - 0 = 0, 3 - 1 = 2

            if(diff1 > diff2){ // 3 > 0, 4 > 2
                index = [map.get(sum) + 1, i] // [1, 3], [1,4]
            }
        }else{
            map.set(sum, i);  // {2,0}, {5,1}, {6,2}, {8, 5}
        }
    }

    if(sum == 0){ //sum = 8
        console.log(nums);
        return;
    }
    if(index[0] === 0 && index[1] === 0){
        console.log([-1]);
        return
    }
    //index = [1,4] ==>> [3, 1, -4] (lasst index is excluded)
    console.log(nums.slice(index[0], index[1] + 1)); 

}

largestSubarraySumZero(n, nums);