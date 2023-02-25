# BST Traversal  
Write three functions that take in a Binary Search Tree (BST) and an empty array, traverse the BST, add its nodes' values to the input array, and return that array. The three functions should traverse the BST using the in-order, pre-order, and post-order tree-traversal techniques, respectively.  

Each `BST` node has an integer `value`, a `left` child node, and a `right` child node. A node is said to be a valid `BST` node if and only if it satisfies the BST property: its `value` is strictly greater than the values of every nodes to its left; its `value` is less than or rqual to the values of every node to its right; and its children nodes are either valid `BST` nodes themselves or `None` / `null`.  

## Example  
__Sample Input__:  
```
tree =    10
        /    \
       5      15
     /   \       \
    2     5       22
   /
  1 

array = []
```
__Sample Output__:  
```
inOrderTraverse: [1, 2, 5, 5, 10, 15, 22] // where the array is the input array
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22] // where the array is the input array
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10] // where the array is the input array
```

## Solution & Complexity  
__Strategy__:  
* In Order Traversal: The BST should be traversed in ascending order. In Order Traversal always looks at the left node, then the current node, then the right node. At any node, start by calling the inOrderTraversal fxn on the left subtree, then array.append(currentVal), then call inOrderTraversal on the right subtree.  
* Pre-Order Traversal: Wants you to append the current value of the array before searching the left and right subtree.  
* Post-Order Traversal: Wants you to append the current value of the array after searching the left and right subtree.  

__Complexity__: O(N) Time | O(N) Space  
* N = # of nodes