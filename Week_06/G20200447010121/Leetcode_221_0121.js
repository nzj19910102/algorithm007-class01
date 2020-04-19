var maximalSquare = function (matrix) {
    let rows = matrix.length;
    let cols = rows > 0 ? matrix[0].length : 0;
    let maxLen = 0;
    let dp = [];
    for (let j = 0; j < cols; j++) {
        dp[j] = 0;
    }
    let prev = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let temp = dp[j];
            if (matrix[i][j] === '1') {
                dp[j] = Math.min(dp[j], dp[j - 1] || 0, prev) + 1;
                maxLen = Math.max(maxLen, dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }
    return maxLen * maxLen;
};