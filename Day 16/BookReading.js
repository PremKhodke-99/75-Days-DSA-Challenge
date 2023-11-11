let calculateTime = (a, speed) => {
    let hrs = 0;
    for(let book of a){
        hrs += Math.ceil(book/speed);
    }
    return hrs;
}

function bookReading(n, h, a){
    a.sort((a,b) => a-b);

    let left = 1, right = a[n-1];
    let k = right;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        let time = calculateTime(a, mid);

        if(time <= h){
            k = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    console.log(k);
}

let books = [3, 6, 7, 11], n = books.length, h = 8;

bookReading(n, h, books);