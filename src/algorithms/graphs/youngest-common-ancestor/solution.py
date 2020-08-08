# O(d) Time | O(1) Space
# d = depth of lowest descendant
class AncestralTree:
    def __init__(self, name):
        self.name = name
        self.ancestor = None

def getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo):
	depthOne = getDescendantDepth(descendantOne, topAncestor)
	depthTwo = getDescendantDepth(descendantTwo, topAncestor)
	if depthOne > depthTwo:
		return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
	else:
		return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)


def getDescendantDepth(descendant, topAncestor):
	depth = 0
	while descendant != topAncestor:
		depth += 1
		descendant = descendant.ancestor
	return depth

def backtrackAncestralTree(lowerDescendant, higherDescendant, diff):
	while diff > 0:
		lowerDescendant = lowerDescendant.ancestor
		diff -= 1
	while lowerDescendant != higherDescendant:
		lowerDescendant = lowerDescendant.ancestor
		higherDescendant = higherDescendant.ancestor
	return lowerDescendant