# Find Closest Value in BST

You are given a BST data structure consisting of BST nodes. Each BST nodes has an integer value stored in a property called "value" and two children nodes storedin properties called "left" and "right", respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strinctly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.

## Example

Sample Input:
      10    , 12
     /  \
    5   15
   / \ /  \
  2  5 13  22
 /       \
1         14

Sample Output: 13