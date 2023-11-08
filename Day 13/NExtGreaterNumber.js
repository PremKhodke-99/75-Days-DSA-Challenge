var swap = (arr, start, end) => {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
}

var nextGreaterElement = (n) => {
    let digit = n.toString().split('');

    let i = digit.length - 2;

    while(i >= 0 && digit[i] >= digit[i+1]){
        i--;
    }

    if(i == -1){
        return -1;
    }

    let j = digit.length - 1;
    while(digit[j] <= digit[i]){
        j--;
    }

    [digit[i], digit[j]] = [digit[j], digit[i]]; //swap

    const right = digit.slice(i+1).sort();
    const result = parseInt([...digit.slice(0,i+1), ...right].join(''));

    console.log(result);
}

let n = 123;
nextGreaterElement(n);