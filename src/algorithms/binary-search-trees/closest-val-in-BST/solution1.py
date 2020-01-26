# STRATEGY:
# Recursively search BST
# COMPLEXITY:
# Average: O(log(N)) Time | O(log(N)) Space
# Worst: O(N) Time | O(N) Space

def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))

# Helper method
def findClosestValueInBstHelper(tree, target, closest):
    # recursive base case
    if tree is None:
        return closest

    # compute (and update) closest value
    if abs(target - closest) > abs(target - tree.value): 
        closest = tree.value

    # traverse appropriate child BST for closer values
    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest