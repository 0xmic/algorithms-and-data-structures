package main

type BST struct {
	Value int

	Left *BST
	Right *BST
}

// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
func (tree *BST) FindClosestValue(target int) int {
	return tree.findClosestValue(target, tree.Value)
}

func (tree *BST) findClosestValue(target, closest int) int {
	if absdiff(target, closest) > absdiff(target, tree.Value) {
		closest = tree.Value
	}
	if target < tree.Value && tree.Left != nil {
		return tree.Left.findClosestValue(target, closest)
	} else if target > tree.Value && tree.Right != nil {
		return tree.Right.findClosestValue(target, closest)
	}
	return closest
}

func absdiff(a, b int) int {
	if a > b {
		return a - b
	}
	return b - a
}