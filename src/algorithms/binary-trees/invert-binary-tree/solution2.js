// Recursive Solution
// O(n) time | O(d) space
function invertBinaryTree(tree) {
  if (tree === null) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}

exports.invertBinaryTree = invertBinaryTree;