// Iterative Solution
// O(n) time | O(n) space
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
  	const current = queue.shift();
  	if (current === null) continue;
  	swapLeftAndRight(current);
  	queue.push(current.left);
  	queue.push(current.right);
  };
};

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left
};

exports.invertBinaryTree = invertBinaryTree;