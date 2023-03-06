# Three Number Sort
You're given an array of integers and another array of three distinct integers. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. For example, a second array of `[x, y, z]` represents a desired order of `[x, x, ..., x, y, y, ..., z, z, ..., z]` in the first array.  

Write a function that sorts the first array according to the desired order in the second array.  

The function should perform this in place (i.e. it should mutate the input array), and it shouldn't use any auxiliary space (i.e., it should run with constant space: `O(1)` space).  

Note that the desired order won't necessarily be ascending or descending and that the first array won't necessarily contain all three integers found in the second array - it might only contain one or two.  

## Example
__Sample Input__:
```
array = [1, 0, 0, -1, -1, 0, 1, 1]
order = [0, 1, -1]
```
__Sample Output__:
```
[0, 0, 0, 1, 1, 1, -1, -1]
```

## Strategy and Complexity
__Strategy__:
* You can count how many times each of the three values appears in the input array. Once you have these counts, you can repopulate the input array as need be.
* Conceptually you can split the original array into three subarrays and move elements of each unique value into the correct subarray. You'll need to keep track of the respective starting indices of these subarrays.
* You can solve this problem with either one or two passes through the input array. If two passes, you will specifically be positioning the first ordered element during the first pas and the third ordered element during the second pass. You will be swapping elements from the left side of teh array whenever you encounter the first element, and you will be swapping elements from the right side of the array whenever you enounter the third element. You need to keep track of where you last placed a first elemnet or third element.  

__Complexity__: O(n) Time | O(1) Space
* n = length of array