var lowestCommonAncestor = function(root, p, q) {
    if (root == null || p == root || q == root) {
        return root
    }
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (left == null) {
        return right;
    }
    if (right == null) {
        return left;
    }
    return root;
}