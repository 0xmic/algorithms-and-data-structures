# STRATEGY:
# Recursively search BST
# COMPLEXITY:
# Average: O(log(N)) Time | O(log(N)) Space
# Worst: O(N) Time | O(N) Space

def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))

def findClosestValueInBstHelper(tree, target, closest):
    if tree is None:
        return closest

    if abs(target - closest) > abs(target - tree.value): 
        closest = tree.value

    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest