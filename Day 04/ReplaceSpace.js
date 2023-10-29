function specialUrl(s){
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            s[i] = '%20';
        }
    }
    s = s.join('');
    return s;
}

function main(){
    let input = 'hello world';
    let res = specialUrl(input);
    console.log(res);
}

main();