# Selection Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.  

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
__Strategy__:  
* Divide the input array into two subarrays in place. The first subarray should be sorted at all times and should start with a length of 0, while the second subarray should be unsorted. Find the smallest (or largest) element in the unsorted subarray and insert it into the sorted subarray with a swap. Repeat this process of finding the smallest (or largest) element in the unsorted subarray and inserting it in its correct position in the sorted subarray with a swap until the entire array is sorted.  

__Complexity__:  
* Best: O(N<sup>2</sup>) Time | O(1) Space  
* Average: O(N<sup>2</sup>) Time | O(1) Space  
* Worst: O(N<sup>2</sup>) Time | O(1) Space  
* N = length of the input array