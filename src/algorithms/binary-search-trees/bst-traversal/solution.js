// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
  if (tree !== null) {
  	inOrderTraverse(tree.left, array);
  	array.push(tree.value);
  	inOrderTraverse(tree.right, array);
  }
  return array;
}

// O(n) time | O(n) space
function preOrderTraverse(tree, array) {
  if (tree !== null) {
  	array.push(tree.value);
  	preOrderTraverse(tree.left, array);
  	preOrderTraverse(tree.right, array);
  }
  return array;
}

// O(n) time | O(n) space
function postOrderTraverse(tree, array) {
  if (tree !== null) {
  	postOrderTraverse(tree.left, array);
  	postOrderTraverse(tree.right, array);
  	array.push(tree.value);
  }
  return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;