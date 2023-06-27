class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Recursive Solution
// O(n) time | O(d) space
export function invertBinaryTree(tree: BinaryTree | null) {
  if (tree === null) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
};

function swapLeftAndRight(tree: BinaryTree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
};
