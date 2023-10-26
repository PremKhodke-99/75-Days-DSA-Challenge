function findQuadrant(x, y){
    if(x > 0 && y > 0){
        return 1;
    }else if(x < 0 && y > 0){
        return 2;
    }else if(x < 0 && y < 0){
        return 3;
    }else{
        return 4;
    }
}

function main(){
    let [x,y] = [-5.5, 2];
    const result = findQuadrant(x , y);
    console.log(result);
}

main();