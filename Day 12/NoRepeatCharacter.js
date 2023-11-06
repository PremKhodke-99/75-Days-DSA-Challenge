let str = 'aabcccbcb';
// let str = 'cddddddd';

var longestSubstringWithoutRepeatingCharacter = (s) => {

    let n = s.length;   
    if(n <= 1) {
        console.log(n);
        return;
    }

    let set = new Set();
    let maxLen = 0, left = 0, right = 0;

    while(right < n){
        if(set.has(s[right])){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
        }

        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }


    console.log("Maxlength", maxLen);
}

longestSubstringWithoutRepeatingCharacter(str);