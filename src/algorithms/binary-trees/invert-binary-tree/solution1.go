package main

type BinaryTree struct {
	Value int

	Left *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(n) space
func (tree *BinaryTree) InvertBinaryTree() {
	queue := []*BinaryTree{tree}
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		if current == nil {
			continue
		}
		current.Left, current.Right = current.Right, current.Left
		queue = append(queue, current.Left, current.Right)
	}
}