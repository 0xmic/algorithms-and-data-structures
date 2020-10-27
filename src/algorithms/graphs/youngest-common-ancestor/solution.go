package main

type AncestralTree struct {
	Name string
	Ancestor *AncestralTree
}

// O(d) time | O(1) space - where d is the depth (height) of the ancestral tree
func GetYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo *AncestralTree) *AncestralTree {
	depthOne := getDescendantDepth(descendantOne, topAncestor)
	depthTwo := getDescendantDepth(descendantTwo, topAncestor)
	if depthOne > depthTwo {
		return backtrackAncestralTree(descendantOne, descendantTwo, depthOne-depthTwo)
	}
	return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo-depthOne)
}

func getDescendantDepth(descendant, topAncestor *AncestralTree) int {
	depth := 0
	for descendant != topAncestor {
		depth++
		descendant = descendant.Ancestor
	}
	return depth
}

func backtrackAncestralTree(lowerDescendant, higherDescendant *AncestralTree, diff int) *AncestralTree {
	for diff > 0 {
		lowerDescendant = lowerDescendant.Ancestor
		diff--
	}
	for lowerDescendant != higherDescendant {
		lowerDescendant = lowerDescendant.Ancestor
		higherDescendant = higherDescendant.Ancestor
	}
	return lowerDescendant
}