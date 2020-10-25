# Breadth-first Search  
You're given a `Node` class that has a `name` and an array of optional `children` nodes. When put together, nodes form an acyclic tree-like structure.  
Implement the `breadthFirstSearch` method on the `Node` class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.  

## Example  
__Sample Input__  
```
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K
```
__Sample Output__  
```
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
```
## Solution & Complexity  
__Strategy__:  
* The Breadth-first Search algorithm works by traversing a graph level by level. In other words, before traversing any Node's children Nodes, its sibling nodes must be traversed. How can you simply and effectively keep track of Nodes' children Nodes as you traverse them, all the while retaining the order in which you must traverse them?  
* You can use a queue to store all of the future Nodes that you will need to explore as you traverse the graph. By adding Nodes' children Nodes to the queue every time you explore them and by using the First-In-First-Out property of the queue, you can traverse the graph in a Breadth-first Search way. Don't forget to add every Node's name to the input array as you traverse the graph.  

__Complexity__: O(V + E) Time | O(V) Space  
* V = # of vertices of the input graph  
* E = # of edges of the input graph  

Time Complexity: Throughout the algorithm, you traverse each node at least once to add it to the final array. Thus, you definitely have O(V) in the time complexity. Also, for each node, you add its children nodes to the queue, which is equal to the number of edges in the tree, adding O(E).