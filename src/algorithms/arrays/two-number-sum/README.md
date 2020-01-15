# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

## Example

Sample Input: [3, 5, -4, 8, 11, 1, -1, 6], 10

Sample Output: [-1, 11]


## Solution & Complexity

### Solution 1: O(N<sup>2</sup>) time | O(1) space
* [JavaScript](src/algorithms/arrays/two-number-sum/solution1.js)
* [Python](src/algorithms/arrays/two-number-sum/solution1.py)

### Solution 2: O(N) time | O(N) space
* [JavaScript](src/algorithms/arrays/two-number-sum/solution2.js)
* [Python](src/algorithms/arrays/two-number-sum/solution2.py)

### Solution 3: O(Nlog(N)) time | O(1) space
* [JavaScript](src/algorithms/arrays/two-number-sum/solution3.js)
* [Python](src/algorithms/arrays/two-number-sum/solution3.py)
