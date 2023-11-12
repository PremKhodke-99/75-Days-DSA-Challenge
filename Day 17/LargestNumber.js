let nums = [3, 30, 34, 5, 9]

var largestNumber = (arr) => {
    arr = arr.join().split(",");

    arr.sort((a, b) => {
        let x = a + b;
        let y = b + a;
        return x - y;
    });

    arr = arr.reverse().join("");

    console.log(arr);
}

largestNumber(nums);