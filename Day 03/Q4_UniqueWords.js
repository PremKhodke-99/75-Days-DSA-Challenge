function unqiueWords(words){
    let set = new Set();
    words = words.split(' ');
    for(let word of words){
        set.add(word);
    }
    console.log(set);
    return set.size;
}

function main(){
    let words = 'Java is great Grails is also great';
    console.log(unqiueWords(words));
}

main();