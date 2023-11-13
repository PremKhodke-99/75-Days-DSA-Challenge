var swapAllOddAndEvenBits = (n) => {

    for(let i = 0; i < 32; i+= 2){
        let first, second;

        if((n & (1 << i)) != 0){
            first = 0
        }
        if((n & (1 << i+1)) != 0){
            second = 0
        }

        if(first != second){
            n = n ^ (1 << (i+1));
            n = n ^ (1 << i);
        }
    }

    console.log(n >>> 0);
}

let n = 22;
swapAllOddAndEvenBits(n);