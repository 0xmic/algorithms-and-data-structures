# O(n) time | O(n) space
# n = length of the array
def minHeightBst(array):
    return constructMinHeightBst(array, 0, len(array) - 1)

def constructMinHeightBst(array, startIdx, endIdx):
    if endIdx < startIdx:
        return None
    midIdx = (startIdx + endIdx) // 2
    bst = BST(array[midIdx])
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1)
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx)
    return bst

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)