# Bubble Sort  
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.  

## Example  
__Sample Input__  
```
array = [8, 5, 2, 9, 5, 6, 3]
```
__Sample Output__  
```
[2, 3, 5, 5, 6, 8, 9]
```

## Solution & Complexity  
__Solution__: Start at the beginning of the array. Observe first two entries [a, b] and swap if b < a. Proceed to next two entries [b, c] and repeat until end of the array is reached. If any swaps took place while traversing the array, repeat from entries [a, b]. Since the largest number will always swap to the end of the array with each cycle, we can optimize by cutting down the traversal by 1 with each cycle.  
__Complexity__: O(N<sup>2</sup>) time | O(1) space
