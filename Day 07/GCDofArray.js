let gcd = (a, b) => {
    if (a == 0) return b;
    if (b == 0) return a;
    return gcd(b, a % b);
}

let gcdOdArray = (arr) => {
    let n = arr.length;
    let num = arr[0];
    for (let i = 1; i < n; i++) {
        num = gcd(num, arr[i]);
    }
    return num;
}

function main() {
    const arr = [4, 6, 8, 16];
    console.log(gcdOdArray(arr));
}

main();