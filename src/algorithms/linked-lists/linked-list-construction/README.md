# Linked List Construction
Write a `DoublyLinkedList` class that has a `head` and a `tail`, both of which point to either a linked list `Node` or `None` / `null`. The class should support:  
- Setting the heads and tail of the linked list.  
- Inserting nodes before and after other nodes as well as at given positions.  
- Removing given nodes and removing nodes with given values.  
- Searching for nodes with given values.  

Each `Node` has an integer `value` as well as a `prev` node and a `next` node, both of which can point to either another node or `None` / `null`.

## Sample Usage
```
// Assume the following linked list has already been created:
1 <-> 2 <-> 3 <-> 4 <-> 5
setHead(4): 4 <-> 1 <-> 2 <-> 3 <-> 5 // set the existing node with value 4 as the head
setTail(6): 4 <-> 1 <-> 2 <-> 3 <-> 5 <-> 6 // set the existing node with value 6 as the tail
insertBefore(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 // move the existing node with value 3 before the existing node with value 6
insertAfter(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a new node with value 3 after the existing node with value 6
insertAtPosition(1, 3): 3 <-> 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a new node with value 3 in position 1
removeNodesWithValue(3): 4 <-> 1 <-> 2 <-> 5 <-> 6 // remove all nodes with value 3
remove(2): 4 <-> 1 <-> 5 <-> 6 // remove the existing node with value 2
containsNodeWithValue(5): true
```