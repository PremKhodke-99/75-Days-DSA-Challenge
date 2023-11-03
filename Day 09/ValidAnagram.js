function validAnagram(s, t){

    if(s.length > 0 && t === undefined || s === undefined && t.length > 0) return false;

    if((s === undefined && t === undefined) || (s === t)) return true;

    if(s.length !== t.length) return false;

    let st = [], tt = [];
    for(let i = 0; i < s.length; i++){
        st.push(s[i]);
        tt.push(t[i]);
    }

    st.sort();
    tt.sort();

    return st.toString() === tt.toString();
}

function main(){
    let a = 'anagram', b = 'nagaram';
    console.log(validAnagram(a,b));
}

main();