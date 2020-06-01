# Validate BST  
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.  

Each `BST` node has an integer `value`, a `left` child node, and a `right` child node. A node is said to be a valid `BST` node if and only if it satisfies the BST property: its `value` is strictly greater than the values of every node to its left; its `value` is less than or equal to the value of every node to its right; and its children nodes are either valid `BST` nodes themselves or `None` / `null`.  

A BST is valid if and only if all of its nodes are valid `BST` nodes.  

## Example  
__Sample Input__:  
```
tree =    10
        /    \
       5      15
     /   \   /   \
    2     5 13    22
   /          \
  1            14
```
__Sample Output__:  
```
true
```

## Solution & Complexity  
__Strategy__:  
Use divide and conquer approach. Start at root node, and validate each sub-tree at a time. Continue validating each left and right-sub tree until result is found.  
Each node in a (sub)tree has a minimum and maximum value, dependent on the parent node value and relative position. As we traverse the tree, evaluate whether a node's value is within a min and max value. This will be accomplished with a helper method that takes in a tree/node, a min value, and a max value.  
Once we reach a null value, we can validate the BST and climb back up the tree.  
__Complexity__: O(N) Time | O(d) space  
* N = # of nodes in the tree  
* d = depth of the tree