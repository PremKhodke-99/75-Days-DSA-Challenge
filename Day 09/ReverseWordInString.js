function reverseWordInString(s){
    // return s.split(' ').reverse().join(' ');

    // Or

    if(s.length <= 1){
        return s;
    }

    let arr = [];
    for(let i = 0, j = 0; j <= s.length; j++){
        if(s[j] == ' '){
            arr.push(s.substring(i,j));
            i = j + 1;
        }
        if(j == s.length){
            arr.push(s.substring(i,j + 1));
        }
    }

    s = '';
    for(let i = arr.length - 1; i >= 0; i--){
        s += arr[i] + ' ';
    }

    return s;
}

function main(){
    let str = 'hello world is the greeting for the world of computer.';
    let s = reverseWordInString(str);
    console.log(s)
}

main();