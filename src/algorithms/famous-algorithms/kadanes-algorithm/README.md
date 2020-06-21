# Kadene's Algorithm  
Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array. A subaray must only contain adjacent numbers.  

## Example  
__Sample Input__ 
```
array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]  
```
__Sample Output__  
```
19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]
```

## Solution & Complexity  
__Strategy__:  
* This problem seems fairly simple until you run into negative numbers, some of which are so big in absolute value that they essentially break an otherwise good subarray into two subarrays, and some of which are small enough that there exists a subarray containing them whose numbers sum to maximum sum that you're looking for. How can you determine which group a negative number belongs to?  
* Realize that at any given index in the input array, the maximum sum for a subarray ending at that index is either the maximum sum for a subarray ending at the previous index plus the number at that index, or just the number at that index. Thus, for each index in the array, you can calculate the maximum sum of a subarray ending at that index, and this can be done in one simple pass through the input array.  
* While passing through the array, also keep track of a variable `maxSoFar` that keeps track of and updates the maximum subarray value within the array.  
__Complexity__: O(N) Time | O(1) Space  
* N = size of the input array