// O(n) time | O(h) space
// n = # nodes
// h = tree height
export function nodeDepths(root: BinaryTree) {
  let sumOfDepths = 0
  const stack: { node: BinaryTree | null; depth: number }[] = [
    { node: root, depth: 0 }
  ]
  while (stack.length > 0) {
    const { node, depth } = stack.pop()!
    if (node === null) continue
    sumOfDepths += depth
    stack.push({ node: node.left, depth: depth + 1 })
    stack.push({ node: node.right, depth: depth + 1 })
  }
  return sumOfDepths
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
