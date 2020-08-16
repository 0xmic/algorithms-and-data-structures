# Remove Kth Node From End  
Write a function that takes in the head of a Singly Linked List and an integer `k` and remove the kth node from the end of the list.  

The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).  

Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its `value` and `next` pointer.  

Note that your function doesn't need to return anything.  

You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.  

Each `LinkedList` node has an integer `value` as well as a `next` node pointing to the next node in the list or to `None` / `null` if it's the tail of the list.  

## Example  
__Sample Input__:  
```
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 // the head node with value 0
k = 4
```  

__Sample Output__:  
```
// No ouput required.  
// The 4th node from the end of the list (the node with value 6) is removed.  
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
```  

## Solution & Complexity  
__Strategy__:  
* Since you are given a Singly Linked List, you do not have access to any of the list's nodes' previous nodes. Thus, traversing the entire list and then counting k nodes back isn't an option. You can instead traverse the entire list and try to know which node is the kth node from the end by the time you reach the final node in the list.  
* One way to achieve this is by traversing the list while keeping track of two nodes at a time.  
* Initialize two variables pointing at the first node in the list. Traverse k nodes in the list, updating the second variable at every node (that is, take k steps with with the first variable as the number of steps between the kth node from the start and the end of the list). Once you reach the end of the list, the first variable should point to the kth node from the end.  

__Complexity__: O(N) Time | O(1) Space  
* N = # of nodes in the linked list