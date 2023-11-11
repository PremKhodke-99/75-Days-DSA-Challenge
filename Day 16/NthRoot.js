var nthRoot = (x, n) => {
    let left = 0, right = x, epsilon = 1e-6;

    while((right - left) >= epsilon){
        let mid = (left + right)/2;

        if(Math.pow(mid, n) > x){
            right = mid;
        }else{
            left = mid;
        }
    }

    console.log(Math.floor(left + epsilon));
}

nthRoot(11,2);