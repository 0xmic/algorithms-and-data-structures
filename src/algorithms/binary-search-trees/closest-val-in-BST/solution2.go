package main

type BST struct {
	Value int

	Left *BST
	Right *BST
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
func (tree *BST) FindClosestValue(target int) int {
	return tree.findClosestValue(target, tree.Value)
}

func (tree *BST) findClosestValue(target, closest int) int {
	currentNode := tree
	for currentNode != nil {
		if absdiff(target, closest) > absdiff(target, currentNode.Value) {
			closest = currentNode.Value
		}
		if target < currentNode.Value {
			currentNode = currentNode.Left
		} else if target > currentNode.Value {
			currentNode = currentNode.Right
		} else {
			break
		}
	}
	return closest
}

func absdiff(a, b int) int {
	if a > b {
		return a - b
	}
	return b - a
}