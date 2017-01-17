// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
const lowestCommonAncestor = (root, p, q) => {
    if (root === null || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q), right = lowestCommonAncestor(root.right, p, q);
    return left === null ? right : right === null ? left : root;
};