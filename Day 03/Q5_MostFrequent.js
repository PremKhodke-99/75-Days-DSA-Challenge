function mostFrequent(statement){
    let map = new Map();
    for(let s of statement){
        map.set(s, (map.get(s) || 0) + 1);
    }
    
    let maxVal = 0;
    for(let [key, val] of map){
        maxVal = Math.max(maxVal, val);
    }

    let ascii = 999, ans;

    for(let [key, val] of map){
        if(val == maxVal && key.charCodeAt() < ascii){ //charCodeAt() ==>> find out acsii code of particular charachter
            ans = key;
            ascii = key.charCodeAt();
        }
    }

    return [ans, maxVal];
}

function main(){
    let statement = 'Statements are unique.'
    let res = mostFrequent(statement);
    console.log(res);
}

main();