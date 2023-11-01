function gcd(a,b){
    if(a == 0) return b;
    if(b == 0) return a;

    return gcd(b, a%b);
}

function main(){
    const num1 = 80, num2 = 80;
    console.log(gcd(num1, num2));
}

main();