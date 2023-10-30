function addOne(digits){
    let carry = 1;
    let n = digits.length - 1;

    while(n >= 0){
        let sum = digits[n] + 1;
        digits[n] = sum % 10;
        carry = Math.floor(sum/10);
        n--;
    }

    if(carry){
        digits.unshift(carry);
    }
    return digits;
}

function main(){
    let digits = [9, 9, 9, 9];
    let result = addOne(digits);
    console.log(result);
}

main();