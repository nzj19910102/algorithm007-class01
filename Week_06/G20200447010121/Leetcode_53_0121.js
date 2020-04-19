var maxSubArray = function(nums) {
    for(var i = 1; i < nums.length; i++) {
        nums[i] += Math.max(0, nums[i - 1])
    }
    return Math.max(...nums)
};
