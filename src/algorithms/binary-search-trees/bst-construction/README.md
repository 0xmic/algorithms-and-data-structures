# BST Construction  
Write a `BST` class for a Binary Search Tree. The class should support:  
- Inserting values with the `insert` method.  
- Removing values with the `remove` method; this method should only remove the first instance of a given value.  
- Searching for values with the `contain` method.  

Note that you can't remove values from a single-node tree. In other words, calling the `remove` method on a single-node tree should simply not do anything.  

Each `BST` node has an integer `value`, a `left` child node, and a `right` child node. A node is said to be a valid `BST` node if and only if it satisfies the BST property: its `value` is strictly greater than the values of every node to its left; its `value` is less than or equal to the values of every node to its right; and its children nodes are either valid `BST` nodes themselves or `None` / `null`.  
## Example  
```
// Assume the following BST has already been created:
          10
        /    \
       5      15
     /   \   /   \
    2     5 13    22
   /          \
  1            14
  
// All operations below are performed sequentially.
insert(12): 10
          /    \
         5      15
       /   \   /   \
      2     5 13    22
     /       /  \
    1       12   14

remove(10): 12
          /    \
         5      15
       /   \   /   \
      2     5 13    22
     /          \
    1            14

contains(15): true
```

## Solution & Complexity  
### Strategy  
* __Insertion__ - Start by calling insertion on the root node. Compare the inserted value with the node value. If inserted value > node value, you can eliminate the left half of the tree. Now compare inserted value with the right child node of root. If inserted value < new node value, eliminate the right half of the tree. Continue until you reach a null node.  
* __Searching__ - Similar to insertion, compare the searched value with the root node value. If searched value > node value, eliminate left of tree and check node.right. If searched value < node value, eliminate the right of the tree and check node.left. If you reach a node where node.value = searched value, return true. Else, if you reach a null node, return false.
* __Deletion__ - You can think of deletion with two cases. If you don't find the value, do nothing. If you do find the value, implement additional functionality. If you want to delete a child node, simply delete it. If you want to remove a node with only 1 child node, simply move the child node to the position of the deleted parent node. If you want to remove a node with 2+ children, you must re-balance the children of the node. This is done by grabbing the smallest value of the right sub-tree of that node. Replace the deleted node's value with the smallest right-subtree value.  

### Complexity: Insertion, Searching, Deletion  
__Recursive Solution__:  
__Average__: O(log(N)) Time | O(log(N)) Space  
__Worst__: O(N) Time | O(N) Space  

__Iterative Solution__:  
__Average__: O(log(N)) Time | O(log(1)) Space  
__Worst__: O(N) Time | O(1) Space  