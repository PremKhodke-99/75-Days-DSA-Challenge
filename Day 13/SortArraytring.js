let nums = ['3', '30', '1', '124', '54644'];

let sortArrayString = (nums) => {
    nums.sort((a, b) => {
        if (a.length != b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b) //works on string only
    })

    console.log(...nums);
}

sortArrayString(nums);