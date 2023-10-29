function number_of_ways(n){
    const mod = 1000000007;
    const dp = new Array(n+1).fill(0);

    dp[0] = 1;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 3 && i - j >= 0; j++){
            dp[i] = (dp[i] + dp[i-j])%mod;
        }
    }
    return dp[n];
}

function main(){
    let number = 3;
    let res = number_of_ways(number);
    console.log(res); 
}

main();