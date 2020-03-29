var permuteUnique = function(nums) {
    let result = []
    let k = nums.length
    let hash = {}
    nums.sort()
    function backtrack(current) {
        if(k == current.length && result.indexOf(current) != -1) {
           return result.push([...current])
        }
        for(let i = 0; i < k; i++) {
            if(!hash[i]){
                hash[i] = true;
                current.push(nums[i]);
                backtrack([...current]);
                hash[i] = false;
                current.pop();
                while(i + 1 < k && nums[i] == nums[i+1]) {
                    i++
                }
            }
        }
    }
    backtrack([])
    return [...new Set(result)]
};