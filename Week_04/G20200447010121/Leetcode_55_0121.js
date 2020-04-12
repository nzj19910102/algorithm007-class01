var canJump = function(nums) {
    if(!nums.length) return false
    var endReachable = nums.length - 1
    for(var i = nums.length - 1; i >=0; i--) {
        if(nums[i] + i >= endReachable)  {
            endReachable = i
        }
    }
    return endReachable == 0
};