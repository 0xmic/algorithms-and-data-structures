package main

type BinaryTree struct {
	Value int

	Left *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(d) space
func (tree *BinaryTree) InvertBinaryTree() {
	tree.Left, tree.Right = tree.Right, tree.Left
	if tree.Left != nil {
		tree.Left.InvertBinaryTree()
	}
	if tree.Right != nil {
		tree.Right.InvertBinaryTree()
	}
}