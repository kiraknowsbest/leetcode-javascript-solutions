// https://leetcode.com/problems/validate-binary-search-tree/description/
const isValidBST = (root, min = -Infinity, max = Infinity) => {
    // if root is null, return true
    if (!root) return true
    // if root.val is less than min or greater than max, it isn't valid
    if (root.val <= min || root.val >= max) return false
    // recurse while setting new max val for left and new min val for right
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};
