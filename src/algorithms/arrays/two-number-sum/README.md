# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

## Example

Sample Input: [3, 5, -4, 8, 11, 1, -1, 6], 10

Sample Output: [-1, 11]


## Solution & Complexity  
### Solution 1  
Strategy: Nested for-loops
Complexity: O(N<sup>2</sup>) time | O(1) space

### Solution 2  
Strategy: Use hash table to store read values
Complexity: O(N) time | O(N) space

### Solution 3  
Strategy: Sort array - traverse from both ends with left/right pointers
Complexity: O(Nlog(N)) time | O(1) space