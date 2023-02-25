# Three Number Sum  
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimentional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.  
If no three numbers sum up to the target sum, the function should return an empty array.  

## Example  
__Sample Input__:  
```
array = [12, 3, 1, 2, -6, 5, -8, 6]  
targetSum = 0  
```
__Sample Output__:  
```
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
```

## Solution & Complexity:  
__Strategy__:  The first step in the solution is to sort the input array. Next, set an index `idx` to the first index in the array, and two pointers - `leftPointer` and `rightPointer` pointing to `array[idx + 1]` and `array[array.length - 1]` . The current sum `currSum` will equal `idx + leftPointer + rightPointer`. If `currSum = targetSum`, add the solution triplet into our array of solutions. If `currSum < targetSum`, since the array is sorted, moving the left pointer to the right will increase our current sum. If `currSum > targetSum`, moving the right pointer to the left will decrease the current sum. Each pointer should only move one at a time so that no potential triplet solutions are missed. If moving either pointer would cause the current sum to move past the target sum, move both pointers. Once both pointers meet in the middle, increase `idx` by one in the input array and reset the pointers.  

Why is the O(nlog(n)) runtime of the sorting step not reflected in the overall time complexity of the algorithm? The nested loops in the solution run in O(n^2) time; this dwarfs the O(nlog(n)) runtime of the sorting step and allows us to remove it from the final time complexity of the algorithm.  

__Complextiy__: O(N<sup>2</sup>) Time | O(N) Space