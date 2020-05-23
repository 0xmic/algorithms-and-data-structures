# Insertion Sort  
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

## Example
__Sample Input__:  
```
array = [8, 5, 2, 9, 5, 6, 3]
```
__Sample Output__:  
```
[2, 3, 5, 5, 6, 8, 9]
```

## Solution & Complexity
__Solution__: Create space at beginning of the list that is tentatively sorted; i.e. the first array value. Then traverse through rest of the array. At each index, insert the new value into the beginning sorted array where it should be such that the beginning array remains sorted. Shift the new value backwards until it is properly sorted. At each step, the beginning sorted array grows by one, the end unsorted array shrinks by one.  
__Complexity__: O(N<sup>2</sup>) time | O(1) space
