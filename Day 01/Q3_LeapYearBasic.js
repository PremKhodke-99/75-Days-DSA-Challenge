function checkLeap(year){
    if(year % 400 == 0){
        return true;
    }else if(year % 100 == 0){
        return false;
    }else if(year % 4 == 0){
        return true;
    }
}

function main(){
    let year = 1800; //false
    console.log('Is Leap year', checkLeap(year));
}

main();