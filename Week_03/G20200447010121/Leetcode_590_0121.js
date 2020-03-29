var preorder = function(root) {
    var res = []
    function helper(root) {
        if(!root) return
        res.push(root.val)
        root.children.forEach(item => {
            helper(item)
        })
    }
    helper(root)
    return res
};