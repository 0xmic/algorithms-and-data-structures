# Node Depths
The distance between a node in a Binary Tree and the tree's root is called the node's depth.  
Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.  
Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right` child node. Children nodes can either be `BinaryTree` nodes themselves or `None` / `null`.

## Example  
Sample Input:  
```
tree =       1  
            /  \  
           2    3
         /  \  /  \
       4    5 6    7
     /   \
    8     9
```

Sample Output:  
```
16  
// The depth of the node with value 2 is 1.
// The depth of the node iwth value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.
``` 

## Solution & Complexity  
### Solution 1  
__Strategy__: Recursive function - pass in node and current depth. f(n, d) = d + f(left, d+1) + f(right, d+1).  
__Complexity__:  O(N) Time | O(h) Space  
* N = # of nodes in tree  
* h = height of binary tree  

### Solution2  
__Strategy__: Iterative approach - use stack to traverse through tree. Start at root node, and add it on top of the stack. For each node in the stack, store the depth. So long as there are nodes in the stack, pop them off the stack and apply the algorithm. Each node adds itself on the stack and passes in its right and left children with their depth d + 1.   
__Complexity__:  O(N) Time | O(h) Space  
* N = # of nodes in tree  
* h = height of binary tree  