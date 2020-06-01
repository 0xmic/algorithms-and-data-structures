// O(N) time | O(d) space
// N = # of nodes in the tree
// d = depth of the tree
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
	if (tree === null) return true;
	if (tree.value < minValue || tree.value >= maxValue) return false;
	const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
	const rightIsValid = validateBstHelper(tree.right, tree.value, maxValue);
	return leftIsValid && rightIsValid;
}

exports.BST = BST;
exports.validateBst = validateBst;