var permute = function(nums) {
    let result = []
    let k = nums.length

    function backtrack(current) {
        if(k == current.length) {
           return result.push([...current])
        }
        for(let i = 0; i < k; i++) {
            if(!current.includes(nums[i])){
                current.push(nums[i]);
                backtrack([...current]);
                current.pop();
            }
        }
    }
    backtrack([])
    return result
}