// O(n) time | O(h) space
// n = # nodes
// h = tree height
export function nodeDepths(root: BinaryTree | null, depth = 0): number {
  if (root === null) return 0
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  )
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}
