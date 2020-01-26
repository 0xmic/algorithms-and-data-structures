// STRATEGY:
// Recursively traverse tree from root - at each node, keep track of running sum of parent node values. Return leaf sums.
// COMPLEXITY:
// O(N) Time | O(N) Space

// This is the class of the input root.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;

    const newRunningSum = runningSum + node.value;

    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}

exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;