# Depth-First Search
You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the depthFirstSearch method of the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the Nodes' names in the input array, and returns it.

## Example
Sample Input:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp; |&nbsp; \  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;D  
&nbsp;&nbsp;&nbsp;/ &nbsp;\ &nbsp;&nbsp;&nbsp;&nbsp; /&nbsp;&nbsp;\  
&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;F&nbsp;&nbsp;G&nbsp;&nbsp;&nbsp;H  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;\ &nbsp;&nbsp;\  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;J&nbsp;&nbsp;&nbsp;K  

Sample Output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

## Strategy & Complexity  
### Solution 1  
__Strategy__:  
For every node, add that node's name to final array. For each child, call DFS and pass in child array.  
__Complexity__:  
O(V + E) Time | O(V) Space  