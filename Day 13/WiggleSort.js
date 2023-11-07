function wiggleSort(arr, n) {

    arr.sort((a,b) => a - b);

    for(let i = 0; i < n-1; i++){
        let cur = arr[i], next = arr[i+1];

        if((i%2 == 0 && cur > next) || (i%2 != 0 && cur < next)){
            swap(arr, i, i+1);
        }
    }

    return arr;
}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function main(){
    const arr = [1,5,1,1,6,4];
    let n = arr.length;
    let res = wiggleSort(arr, n);
    console.log(res);
}

main()