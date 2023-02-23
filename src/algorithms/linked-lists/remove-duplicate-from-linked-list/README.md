# Remove Duplicates From Linked List
You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.  

Each `LinkedList` node has an integer `value` as well as a `next` node pointing to the next node in the list of to `None` / `null` if it's the tail of the list.  

## Example
___Sample Input__:
```
linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 
// the head node with value 1
```

__Sample Output__:
```
1 -> 3 -> 4 -> 5 -> 6
// the head node with value 1
```

## Strategy and Complexity
__Strategy__:
* Given that the nodes are in sorted order, we know that the duplicate nodes immediately follow any first instance of a value. Therefore, you can looop through them and, at each iteration, simply remove all successive nodes that have the same value as the current node. For each node, change its next pointer to the next node in the linked list that has a different value. This will remove all duplicate-value nodes.  
__Complexity__: O(n) Time | O(1) Space
* n = number of nodes in the linked list