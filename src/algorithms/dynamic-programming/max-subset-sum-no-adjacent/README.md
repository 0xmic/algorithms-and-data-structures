# Max Subset Sum No Adjacent  
Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.  
If a sum can't be generated, the funciton should return `0`.  

## Example  
__Sample Input__:  
```
array = [75, 105, 120, 75, 90, 135]
```
__Sample Output__:  
```
330 // 75, 120, 135  
```

## Complexity & Solution  
__Strategy__: Build an array the same length of the input array. Iterate through the input array with an index. Input the greatest sum that you can create from numbers in the input array (without adjacent numbers) into your new array. For each index in the input array, add up numbers up to and including the index number.  
You can express the optimal formula as:  
```
array = [7, 10, 12, 7, 9, 14] // test data  
maxSums = [7, 10, 19, 19, 28, 33] // test data  

maxSums[i] = max { 1) maxSums[i-1]  
                 { 2) maxSums[i-2] + array[i]
```  

Time Complexity - Since we iterate through the array and run a constant time operation, time complexity is O(N), where N equals the input length. Space complexity is O(N) since we build an array of N size.

How can this be improved? Since we only need to reference maxSums[i-1] and maxSums[i-2], we can continually update these references and reduce our space complexity to O(1).  

__Complexity__:  
Solution 1: O(N) Time | O(N) Space  
Solution 2: O(N) Time | O(1) Space  
* N = length of the input array
