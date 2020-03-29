var levelOrder = function(root) {
    let nums = [];
    if(!root) return nums
    let queue = [root];
    while(queue.length > 0) {
        var res = []
        let length = queue.length
        for(var i = 0; i < length; i++) {
            const current = queue.shift();
            res.push(current.val);
            queue.push(...current.children);
        }
        nums.push(res)
    }

    // helper(nums, root, 0);
    return nums;
};
// 递归模式
// function helper(nums, node, k){
//     if(node == null){
//         return;
//     }
//     if(nums[k] == undefined){
//         nums[k] = [];
//     }
//     nums[k].push(node.val);
//     for(var i = 0; i < node.children.length; i++){
//         helper(nums,node.children[i],k + 1);
//     }
// }