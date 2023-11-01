let modulusOfNumberWithoutRecursion = (a , b) => {
    if(b === 0) 
        return -1;

    if(a < b) 
        return a;

    return modulusOfNumberWithoutRecursion(a-b,b);
}

function main(){
    let res = modulusOfNumberWithoutRecursion(10, 3);
    console.log(res);
}

main();