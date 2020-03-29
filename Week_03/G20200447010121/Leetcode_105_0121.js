var buildTree = function (preorder, inorder) {
    // if (!inorder.length) return null
    // 前序遍历：根-左-右
    // 中序遍历：左-根-右
    // let tmp = preorder[0],
    //     mid = inorder.indexOf(tmp)
    // let root = new TreeNode(tmp)
    // root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    // root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    // return root

    let build = (inorder) => {
        if (!inorder || !inorder.length) return null

        let tmp = preorder.shift(),
            mid = inorder.indexOf(tmp)
        let root = new TreeNode(tmp)

        root.left = build(inorder.slice(0, mid))
        root.right = build(inorder.slice(mid + 1))

        return root
    }
    return build(inorder)
};

