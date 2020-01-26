# Branch Sums
Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right", respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value.

## Example  
Sample Input:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3  
&nbsp;&nbsp;&nbsp;/ &nbsp;\ &nbsp;&nbsp; /&nbsp;&nbsp;\  
&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;7  
&nbsp;/&nbsp;\ &nbsp;&nbsp;&nbsp;\  
8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10  

Sample Output: [15, 16, 18, 10, 11]

## Solution & Complexity  
### Solution 1  
__Strategy__:  Recursively traverse tree from root - at each node, keep track of running sum of parent node values. Return leaf sums.  
__Complexity__:  O(N) Time | O(N) Space  