// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
const lowestCommonAncestor = (root, p, q) => {
  if (root === null || root === p || root === q) return root;
  // if root isn't null, root isn't p, root isn't q, then we still recurse
  let left = lowestCommonAncestor(root.left, p, q),
	  right = lowestCommonAncestor(root.right, p, q);
  // if left is null, we return we return right
  // if right is null, we return left
  // if left and right are null, we return root
  return left === null ? right : right === null ? left : root;
};