var reverseBits = (n) => {
    let ans = 0b0;
    let cur = n;

    for(let i = 0; i < 32; i++){
        let lastbit = cur & 0b1;
        ans = ans << 1;
        ans = ans | lastbit;
        cur = cur >> 1;
    }

    console.log(ans >>> 0);
}

let n = 43261596;
reverseBits(n);