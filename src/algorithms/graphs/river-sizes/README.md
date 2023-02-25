# River Sizes  
You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only `0`s and `1`s. Each `0` represents land, and each `1` represents part of a river. A river consists of any number of `1`s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent `1`s forming a river determine its size.  

Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.  

Write a function that returns an array of the sizes of all rivers represented in the matrix. The sizes don't need to be in any particular order.  

## Example  
__Sample Input__:  
```
matrix = [
   [1, 0, 0, 1, 0],
   [1, 0, 1, 0, 0],
   [0, 0, 1, 0, 1],
   [1, 0, 1, 0, 1],
   [1, 0, 1, 1, 0]  
]
```  

__Sample Output__:  
```
[1, 2, 2, 2, 5] // The numbers could be ordered differently.

// The rivers can be clearly seen here:
// [
//   [1,  ,  , 1,  ],
//   [1,  , 1,  ,  ],
//   [ ,  , 1,  , 1],
//   [1,  , 1,  , 1],
//   [1,  , 1, 1,  ]
// ]
```  

## Solution & Complexity  
__Strategy__:  
* Since you must return the sizes of rivers, which consist of horizontally and vertically adjacent 1s in the input matrix, you must somehow keep track of groups of neighboring 1s as you traverse the matrix. Try treating the matrix as a graph, where each element in the matrix is a node in the graph with up to 4 neighboring nodes (above, below, to the left, and to the right), and traverse it using a popular graph-traversal algorithm like Depth-first Search of Breadth-first Search.  
* By traversing the matrix using DFS or BFS, any time that you encounter a 1 you can traverse the entire river that this 1 is a part of (and keep track of its size) by simply iterating through the given node's neighboring nodes and their own neighboring nodes so long as the nodes are 1s.  
* Naturally, many nodes in the graph will have overlapping neighboring nodes, and as you traverse the matrix, you will undoubtedly encounter nodes that you have previously visited. In order to prevent mistakenly calculating the same river's size multiple times and to avoid doing needless computational work, try keeping track of ever node that you visit in an auxiliary data structure and only performing important computations on unvisited nodes. What data structure would be ideal here? A hash table or simply an identically sized matrix with boolean values.  

__Complexity__: O(wh) Time | O(wh) Space  
* w = width of input matrix  
* h = height of input matrix