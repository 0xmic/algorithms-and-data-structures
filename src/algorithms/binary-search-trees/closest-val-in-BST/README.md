# Find Closest Value in BST

You are given a BST data structure consisting of BST nodes. Each BST nodes has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right", respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.

## Example

Sample Input:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;, 12  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\  
&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15  
&nbsp;&nbsp;&nbsp;/ &nbsp; \ &nbsp;&nbsp; /&nbsp;&nbsp;\  
&nbsp;&nbsp;2&nbsp;&nbsp;5&nbsp;13&nbsp;&nbsp;22  
&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\  
1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14  

Sample Output: 13

## Solution & Complexity  
### Solution 1  
Average: O(log(N)) Time | O(log(N)) Space
Worst: O(N) Time | O(N) Space

### Solution 2  
Average: O(log(N)) Time | O(1) Space
Worst: O(N) Time | O(1) Space

