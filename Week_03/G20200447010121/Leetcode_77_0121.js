var combine = function(n, k) {
    let result = []
    function backtrack(i, current) {
        if(k == current.length) {
           return result.push([...current])
        }
        for(let j = i; j <= n; j++) {
            current.push(j)
            backtrack(j + 1, current)
            current.pop()
        }
    }
    backtrack(1, [])
    return result
};