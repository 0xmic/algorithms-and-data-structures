// STRATEGY:
// Iteratively search BST
// COMPLEXITY:
// Average: O(log(N)) Time | O(1) Space
// Worst: O(N) Time | O(1) Space

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity);
};

function findClosestValueInBstHelper(tree, target, closest) {
    currentNode = tree;

    while (currentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        };

        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        };
    };

    return closest;
};

exports.findClosestValueInBst = findClosestValueInBst;