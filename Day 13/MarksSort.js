var markSort = (n, students) => {
    let obj = [];

    for(let i = 0; i < n; i++){
        let sum = getSum(students[i].splice(2));
        obj.push({
            'id':students[i][0],
            'name':students[i][1],
            'marks':sum
        })
    }

    obj.sort((a,b) => {
        if(a.marks !== b.marks){
            return b.marks - a.marks;
        }
        if(a.name !== b.name){
            return a.name.localeCompare(b.name);
        }

        return b[0] - a[0];
    })

    let rank = [];
    obj.forEach(ele => {
        rank.push(ele.id);
    })
    console.log(rank);
}

function getSum(arr){
    let sum = 0;
    for(let marks of arr){
        sum += marks;
    }
    return sum;
}

let students = [[1, 'Alan', 45, 56, 21, 32, 74],
    [2, 'Fabien', 95, 94, 93, 92, 91],
    [3, 'Gamora', 85, 65, 54, 65, 76]];
let n = students.length;

markSort(n, students);