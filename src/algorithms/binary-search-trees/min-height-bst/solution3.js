// O(n) time | O(n) space
// n = length of the array
function minHeightBst(array) {
  return constructMinHeightBst(array, 0, array.length - 1);
};

function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
};

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      };
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      };
    };
  };
};

exports.minHeightBst = minHeightBst;