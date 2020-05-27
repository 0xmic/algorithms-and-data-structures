# Validate Subsequence  
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.  
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers `[1, 3, 4]` form a subsequence of the array `[1, 2, 3, 4]`, and so do the numbers `[2, 4]`. Note that a single number in an array and teh array itself are both valid subsequences of the array.  

## Example  
__Sample Input__:  
```
array = [5, 1, 22, 25, 6, -1, 8, 10]  
sequence = [1, 6, -1, 10]  
```
__Sample Output__:  
```
true
```  

## Solution & Complexity  
### Solution 1  
__Strategy__: Use 2 pointers - one pointed at the first element in the subsequence, the other pointed at the first element in the main array. Move the main sequence pointer forward until the value matches with the subsequence array pointer. Once found, move the pointer in the subsequence. Continue moving forward the main pointer and compare to the new subsequence index value.  
Solution 1 uses a while loop and traverse through both arrays in tandem. Two pointers are used to maintain the indexes in each array.  
__Complextiy__: O(N) Time | O(1) Space  
* N = length of main array  

### Solution 2  
__Strategy__: Same logic as solution 1. Difference in implementation is that a for loop is used to traverse the main array and we will only keep track of our position in the sub array.  
__Complexity__: O(N) Time | O(1) Space  
* N = length of main array  