var jump = function(nums) {
    var len = nums.length, count = 0, l = 0
    if(len == 1) return count
    
    for(var i = 0; i < len; i = l) {
        var max = nums[i]+i
        if(max >= len-1) return ++count
        ++count
        for(var j = i + 1; j <= i + nums[i] && j < len; j++){
            if(nums[j] + j > max){
                l = j;
                max = nums[j] + j
            }
        }
        if(nums[l] + l >= len - 1) return ++count
    }
    return count
};