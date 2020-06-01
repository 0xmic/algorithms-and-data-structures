# O(N) time | O(d) space
# N = # nodes in the tree
# d = depth of the tree
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def validateBst(tree):
    return validateBstHelper(tree, float("-inf"), float("inf"))

def validateBstHelper(tree, minValue, maxValue):
	if tree is None:
		return True
	if tree.value < minValue or tree.value >= maxValue:
		return False
	leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
	rightIsValid = validateBstHelper(tree.right, tree.value, maxValue)
	return leftIsValid and rightIsValid