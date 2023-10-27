function capitalise(paragraph){
    let n = paragraph.length;
    let para = paragraph[0].toUpperCase();

    for(let i = 1; i < n; i++){
        if(paragraph[i] === " "){
            para += " " + paragraph[++i].toUpperCase();
            continue;
        }
        para += paragraph[i];
    }

    return para;
}

function main(){
    let str = "the quick Brown fox jumps over The lazy dog.";
    let res = capitalise(str);
    console.log(res);
}

main();

