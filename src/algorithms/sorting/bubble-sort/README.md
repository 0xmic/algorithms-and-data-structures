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
__Solution__:  
* Traverse the input array, swapping any two numbers that are out of order and keeping track of any swaps that you make. Once you arrive at the end of the array, check if you have made any swaps; if not, the array is sorted and you are done; otherwise, repeat the previous steps until the array is sorted.  
__Complexity__:  
* Best: O(n) Time | O(1) Space  
* Average: O(N<sup>2</sup>) Time | O(1) Space  
* Worst: O(N<sup>2</sup>) Time | O(1) Space  
* N = length of the input array