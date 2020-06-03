# Invert Binary Tree  
Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.  
Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right` child node. Children nodes can either be `BinaryTree` nodes themselves or `None`/`null`.  

## Example  
__Sample Input__:  
```
tree =     1 
        /     \
       2       3
     /   \    /  \
    4     5  6    7
   /  \
  8    9
```
__Sample Output__:  
```
           1 
        /     \
       3       2
     /   \    /  \
    7     6  5    4
                /   \
               9     8
```

## Solution & Complexity  
__Strategy__:  
* Iterative - Start by initializing a queue. Traverse the tree in a Breadth First Sdarch manner and swap a node's child nodes at each step, placing the child nodes in the queue. Continue popping nodes off the queue and swapping its children until the queue is empty. Null nodes should be swapped and included in the queue to account for nodes with only one child. A check can be added to skip popping off null nodes.  
* Recursive - Start at the root node. Swap its left and right nodes nodes. Call the same recursive function on the left and right nodes. Continue until you hit a null leaf node.  

__Complexity__:  
Iterative: O(N) Time | O(N) Space  
Recursive: O(N) Time | O(d) Space  
* N = # of nodes
* d = depth of tree
