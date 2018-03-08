// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
const serialize = root => {
  // push all nodes into an array by breadth first traversal
  if (!root) return [];
  let data = [];
  let frontier = [root];
  while(frontier.length > 0) {
    let node = frontier.shift();
    data.push(node);
    data.push(node.left);
    data.push(node.right);
    if (node.left) frontier.push(node.left);
    if (node.right) frontier.push(node.right);
  }
  return data;
};

const deserialize = data => {
  let root = data[0] || null;
  while(data.length > 0) {
    let node = new TreeNode(data.shift());
    node.left = data[0];
    node.right = data[1];
  }
  return root;
};