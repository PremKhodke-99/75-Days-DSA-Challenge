function countVowel(word){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I'|| char == 'o' || char == 'O'|| char == 'u' || char == 'U'){
            count++;
        }
    }
    return count;
}

function main(){
    let word = 'Antigravity in the spacecraft';
    console.log(countVowel(word));
}

main();