function pyramid(n){
    let arr = [];

    for(let i = 1; i <= n; i++){
        let str = '';
        for(let j = 1; j <= i; j++){
            str += '*';
        }
        arr.push(str);
    }

    return arr;
}

function main(){

    const n = 4;
    let arr = pyramid(n);
    arr.forEach(line => {
        console.log(line);
    });
}

main();
