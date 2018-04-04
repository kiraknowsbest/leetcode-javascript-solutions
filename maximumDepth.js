// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
const maxDepth = (root, depth = 1) => root === null ? 0 : Math.max(depth, maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
// return whatever is larger: the current depth, the returned value of left, or the returned value of right