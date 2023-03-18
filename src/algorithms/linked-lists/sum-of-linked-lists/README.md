# Sum of Linked Lists
You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer, and the first node in each Linked List always represents the least signficant digit of the integer. Write a function that returns the head of a new Linked List that represents the sum of the integers represented by the two input Linked Lists.  

Each `LinkedList` node has an integer `value` as well as a `next` node pointing to the next node in the list or to `None`/`null` if it's the tail of the list. The `value` of each `LinkedList` node is always in the range of `0 - 9`.  

Note: your function must create and return a new Linked List, and you're not allowed to modify either of the input Linked Lists.  

## Example
__Sample Input__:
```
linkedListOne = 2 -> 4 -> 7 -> 1
linkedListTwo = 9 -> 4 -> 5
```

__Sample Output__:
``
1 -> 9 -> 2 -> 2
// linkedListOne represents 1742
// linkedListTwo represents 549
// 1742 + 549 = 2291
``

## Strategy and Complexity
__Strategy__:
* If you can determine the integers that each individual Linked List represents, then all you need to do is add these integers and create a new Linked List that represents the summed value.
* To complete the above approach, you need to break down the sum of the two Linked Lists' numbers into its individual digits. Once you know these digits, you can create a new Linked List using them. This approach is fine, but can be improved with a single iteration through the Linked Lists.
* Since each Linked List's digits are ordered from least significant to most significant digit, you can simply loop through both Linked Lists, consider the digit with the same significance, and add these digits together while keeping track of any carry that comes out of the addition. At each iteration, when you add the two Linked List digits, also add the carry from the previous iteration. Create a new Linked List node that stores the calculated value, and add that to your new Linked List. Keep iterating until you reach the end of both Linked Lists and have no remaining carry.  

__Complexity__: O(max(n, m)) Time | O(max(n, m)) Space
* n = length of first Linked List
* m = length of second Linked List
