let str = 'abacd';
let n = str.length, k = 3;

var lengthOfLongestSubstringKDistinct = (n, str, k) => {
    let  i = 0, count = 0, maxLen = 0;

    if(k == 0){
        return 0;
    }
    if(k === n){
        return k;
    }

    let map = new Map();

    for(let j = 0; j < n; j++){
        if(map.has(str[j])){
            map.set(str[j], map.get(str[j]) + 1);
            maxLen = Math.max(maxLen, j - i + 1);
        }
        else{
            map.set(str[j], 1);
            count++;

            if(count == k){
                maxLen = Math.max(maxLen, j - i + 1)
            }else if(count > k){
                while(i < j && count > k){
                    if(map.get(str[i]) == 1){
                        map.delete(str[i]);
                        count--;
                    }
                    else{
                        map.set(str[i], map.get(str[i] - 1));
                    }
                    i++;
                }
            }
        }
    }
    console.log("Max length", maxLen);
}

lengthOfLongestSubstringKDistinct(n, str, k);