# Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.  

## Example
__Sample Input__:
```
array = [1, 2, 3, 5, 6, 8, 9]
```
__Sample Output__:
```
[1, 4, 9, 25, 36, 64, 81]
```

## Strategy and Complexity
__Strategy__:
* Strategy 1: Traverse the array value by value, square each value, and insert the squares into an output array. Then, sort the output array before returning it. While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of possible negative numbers.
* Strategy 2: To reduce the time complexity of the algorithm in Strategy #1, you need to avoid sorting the output array. To do this, as you square the values of the input array, try to directly insert them into their correct position in the output array. Use two pointers to keep track of the smallest and largest values in the input array. Compare the absolute values of these smallest and alrgest values, square the larger absolute value, and place the square at the end of the output array, filling it up from right to left. Move the pointers accordinly, and repeat this process until the output array is filled.  

__Complexity__: O(n) Time | O(n) Space
* n = length of input array
