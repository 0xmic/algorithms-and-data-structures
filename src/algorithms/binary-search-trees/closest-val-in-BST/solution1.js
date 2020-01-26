// STRATEGY:
// Recursively search BST
// COMPLEXITY:
// Average: O(log(N)) Time | O(log(N)) Space
// Worst: O(N) Time | O(N) Space

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree == null) return closest;

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }

    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}

exports.findClosestValueInBst = findClosestValueInBst;