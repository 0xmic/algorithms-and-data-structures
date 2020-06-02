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
__Complexity__: O( ) Time | O( ) Space