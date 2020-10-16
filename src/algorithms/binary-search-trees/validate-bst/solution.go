package main

import "math"

type BST struct {
	Value int

	Left *BST
	Right *BST
}

// O(n) time | O(d) space
func (tree *BST) Validate() bool {
	return tree.validate(math.MinInt32, math.MaxInt32)
}

func (tree *BST) validate(min, max int) bool {
	if tree.Value < min || tree.Value >= max {
		return false
	}
	if tree.Left != nil && !tree.Left.validate(min, tree.Value) {
		return false
	}
	if tree.Right != nil && !tree.Right.validate(tree.Value, max) {
		return false
	}
	return true
}