var postorder = function(root) {
    if(!root) return []
    var res = []
    helper(root)

    function helper(root) {
        if(!root) return
        for(var i = 0; i < root.children.length; i++) {
            helper(root.children[i])
        }
        res.push(root.val)
    }
    return res
};