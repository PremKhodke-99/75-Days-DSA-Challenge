var moveZero = (nums) => {
    let n = nums.length;
    let arre = [];

    let count = 0;
    for(let i = 0; i < n; i++){
        if(nums[i] == 0){
            count++;
        }else{
            arre.push(nums[i]);
        }
    }

    for(let i = 0; i < count; i++){
        arre.push(0);
    }

    console.log(...arre);
}

let nums = [1, 0, 1, 0, 2, 5, 0, 0, 1];
moveZero(nums);