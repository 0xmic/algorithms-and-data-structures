# Sort Stack
Write a function that takes in an array of integers representing a stack, recursively sorts the stack in place (i.e., doesn't create a brand new array), and returns it.  

The array must be treated as a stack, with the end of the array as the top of the stack. Therefore, you're only allowed to
* Pop elements from the top of the stack by removing elements from the end of the array using the built-in `.pop()` method.
* Push elements to the top of the stack by appending elements to the end of the array using the build-in `.append()` method.
* Peek at the element on top of the stack by accessing the last element in the array.
You're not allowed to perform any other operations ont he input array, including accessing elements (except for the last element), moving elements, etc.. You're also not allowed to use any other data structures, and your solution must be recursive.  

## Example
__Sample Input__:
```
stack = [-5, 2, -2, 4, 3, 1]
```
__Sample Output__:
```
[-5, -2, 1, 2, 3, 4]
```

## Strategy & Complexity
__Strategy__:
* Inserting a single item into an already sorted stack is fairly simple: you can pop elements off of the stack until you find an element that's smaller than or equal to the value that you want to add. Then, you can push that value on top of the stack and reinsert all of the previously popped items back on top of the stack in the reverse order in which you popped them off. The resulting stack will be sorted.  
* You can easily insert multiple items in an already sorted stack by just repeatedly performing what's described in the last point. However, you need to have an already sorted stack. To get an already sorted stack, you will need to pop all of the elements off of the unsorted stack until it's eventually empty, and then you need to push all of the items back on the stack, inserting them in their sorted order one at a time.  
* If you think about the last point recursively, the steps are as follows:
  1. Pop an item from the top of the stack, and hold onto it in memory
  2. Sort the rest of the stack, To do so, repeat #1 until the stack is empty, at which point you've reached the base case since an empty stack is always sorted.  
  3. Insert the most recently poppsed off item from step #1 back into the now sorted stack but in its proper sorted position. The first time that you reinsert an item, it'll be inserted in an empty stack.  

__Complexity__: O(n^2) Time | O(n) Space
* n = length of the stack
