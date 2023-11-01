let divideTwoIntegers = (dividend, divisor) => {
    if(dividend == 0) return 0;
    if(dividend == -2147483648 && divisor == -1) return 2147483648;

    const sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    while( dividend >= divisor){
        dividend -= divisor;
        quotient++;
    }

    return sign * quotient;
}

function main(){
    let dividend = 7, divisor = -3; //-2
    console.log(divideTwoIntegers(dividend, divisor));
}

main();