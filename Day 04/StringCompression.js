function compression(s){
    let comp = '';
    let count = 1;

    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i+1]){
            count++;
        }else{
            comp += s[i] + count;
            count = 1;
        }
    }
    return comp;
}

function main(){
    const str = 'aaaabbbbcccccccckk'
    const compressed = compression(str);
    console.log(compressed);
}

main();