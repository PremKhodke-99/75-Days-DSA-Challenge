let modulusOfNumberWithRecursion = (a , b) => {
    if(b === 0) 
        return -1;

    if(a < b) 
        return a;

    return modulusOfNumberWithRecursion(a-b,b);
}

function main(){
    let res = modulusOfNumberWithRecursion(10, 3);
    console.log(res);
}

main();