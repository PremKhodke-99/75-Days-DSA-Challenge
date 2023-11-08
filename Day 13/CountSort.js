var countSort = (n, str) => {
    let set = new Set();
    for(let i = 0; i < n; i++){
        set.add(str[i]);
    }

    let count = [];
    for(let i = 0; i < 26; i++){
        count[i] = 0;
    }

    for(let i = 0; i < n; i++){
        ++count[str[i]];
    }

    for(let i = 1; i <= 25; i++){
        count[i] += count[i-1];
    }

    let final = new Array(n);
    for(let i = n - 1; i >= 0; i--){
        final[count[str[i]] - 1] = str[i];
        --count[str[i]];
    }

    console.log(final);

}

let str = 'abcdeedcba', n = str.length;
countSort(n, str);