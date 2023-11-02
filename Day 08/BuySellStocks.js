function buyAndSellStocks(prices){

    let totalProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            totalProfit += prices[i] - prices[i-1];
        }
    }
    return totalProfit;
}

function main(){
    let prices = [7, 1, 5, 3, 6, 4];
    let profit = buyAndSellStocks(prices);
    console.log(profit);
}

main();