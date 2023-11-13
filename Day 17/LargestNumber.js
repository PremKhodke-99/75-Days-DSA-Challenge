let nums = [3, 30, 34, 5, 9]

var largestNumber = (arr) => {
    arr = arr.join().split(",");
    console.log(arr);
    arr.sort((a, b) => {
        let x = a + b;
        let y = b + a;
        console.log(x, y);
        return x - y;
    });

    arr = arr.reverse().join("");

    console.log(arr);
}

largestNumber(nums);