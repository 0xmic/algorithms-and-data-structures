# STRATEGY:
# Recursively traverse tree from root - at each node, keep track of running sum of parent node values. Return leaf sums.
# COMPLEXITY:
# O(N) Time | O(N) Space

# This is the class of the input root.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def branchSums(root):
    sums = []
    calculateBranchSums(root, 0, sums)
    return sums

def calculateBranchSums(node, runningSum, sums):
    if node is None:
        return
    
    newRunningSum = runningSum + node.value
    
    if node.left is None and node.right is None:
        sums.append(newRunningSum)
        return
    
    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)