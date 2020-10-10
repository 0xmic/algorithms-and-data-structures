package main

type BinaryTree struct {
	Value int
	Left, Right *BinaryTree
}

// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
func NodeDepths(root *BinaryTree) int {
	return nodeDepthsHelper(root, 0)
}

func nodeDepthsHelper(root *BinaryTree, depth int) int {
	if root == nil {
		return 0
	}
	return depth + nodeDepthsHelper(root.Left, depth+1) + nodeDepthsHelper(root.Right, depth+1)
}