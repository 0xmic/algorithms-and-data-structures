# Minimum Passes Of Matrix
Write a function that takes in an integer matrix of potentially unequal height and width and returns the minimum number of passes required to convert all negative integers in the matrix to positive integers.  

A negative integer in the matrix can only be converted to a positive integer if one or more of its adjacent elements is positive. An adjacent element is an element that is to the left, to the right, above, or below the current element in the matrix. Converting a negative to a positive simply involves multiplying it by `-1`.  

Note that the `0` value is neigher positive nor negative, meaning that a `0` can't convert an adjacent negative to a positive.  

A single pass through the matrix involves converting all the negative integers that can be converted at a particular point in time. For example, consider the following input matrix:
```
[
    [0, -2, -1],
    [-5, 2, 0],
    [-6, -2, 0]
]
```
After a first pass, only 3 values can be converted to positives:
```
[
    [0, 2, -1],
    [5, 2, 0],
    [-6, 2, 0]
]
```
After a second pass, the remainin negative values can all be converted to positives:
```
[
    [0, 2, 1],
    [5, 2, 0],
    [6, 2, 0]
]
```
Note that the input matrix will always contain at least one element. If the negative integers in the input matrix can't all be converted to positives, regardless of how many passes are run, your function should return `-1`.  

## Example
__Sample Input__:
```
matrix = [
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1]
]
```
__Sample Output__:
```
3
```

## Strategy and Complexity
__Strategy__:
* The brute-force approach to solving this problem is simply iterate through the entire matrix, find all positive values, and change their negative neighbors to positive. You then repeat this process until no more negative neighbors exist. This approach works, but it doesn't run in an optimal time complexity. This approach requires looking at the same elements in the matrix multiple times. This can be improved by only iterating through each element once.
* Once a positive value has been found and you can change its neighbors to positives, this positive value can no longer lead to the conversion of any more negative values. Instead, its neighbors (that were just changed positive) have the possibility of changing their own neighbors to positives. After you change a negative value to positive, you should store its position so that you can check if it can flip any of its neighbors in the next pass of the matrix.
* You can solve this problem in `O(w * h)` time, where `w` and `h` are the width and height of the matrix, by implementing a breadth-first search, starting from all the positive-value positions in the array. Initialize a queue that stores the positions of all positive values, iterate through the queue, dequeue elements out, and consider all of their neighbors. If any of their neihbors are negative, change them to positive, and store their positions in a secondary queue. Once the first queue is empty, increment your number of passes, and iterate through the second queue you created (the one with the positions of negatives that were changed to positives). Repeat this process until no values are converted during a pass.
* This approach can work using either one or two queues. If you decide only one queue, you will need to differentiate the values that were already positive when the current pass started from the values that were changed to positive during the current pass.  

__Complexity__: O(w * h) Time | O(w * h) Space
* w = width of matrix
* h = height of matrix
