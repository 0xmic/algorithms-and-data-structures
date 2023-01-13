// O(n) time | O(h) space
// n = # nodes 
// h = tree height
function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{node: root, depth: 0}];
  while (stack.length > 0) {
  	const {node, depth} = stack.pop();
  	if (node === null) continue;
  	sumOfDepths += depth;
  	stack.push({node: node.left, depth: depth + 1});
  	stack.push({node: node.right, depth: depth + 1});
  };
  return sumOfDepths;
};

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

exports.nodeDepths = nodeDepths;
