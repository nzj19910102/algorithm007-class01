var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(var i = 0; i < dp.length; i++) {
        for(var j = 0; j < coins.length; j++) {
            if(i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
};