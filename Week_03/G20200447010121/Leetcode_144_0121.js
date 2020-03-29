var preorderTraversal = function(root) {
    var res = []
    // function helper(root) {
    //     if(root) {
    //         res.push(root.val)
    //         helper(root.left)
    //         helper(root.right)
    //     }
    // }
    // helper(root)
    if(root) {
        var stack = [root]
        while (stack.length){
            var node = stack.pop();
            res.push(node.val);
            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }
    return res
};