# Single Cycle Check  
You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer `2` represents a jump of two indices forward in the array; the integer `-3` represents a jump of three indices backward in the array.  
If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of `-1` at index `0` brings us to the last index in the array. Similarly, a jump of `1` at the last index in the array brings us to the index `0`.  
Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.  

## Example  
__Sample Input__  
```
array = [2, 3, 1, -4 , -4, 2]
```
__Sample Output__  
```
true
```

## Solution & Complexity  
__Strategy__:  
* In order to check if the input array has a single cycle, you have to jump through all of the elements in the array. You can keep a counter, jump through elements in the array, and stop once you've jumped through as many elements as are contained in the array.  
* Assume the input array has length `n`. If you start at index `0` and jump through `n` elements, if at any point you jump through `m` elements where `m < n` and you are back at index(0), then you know you have a cycle that does not include all numbers in the array.
* Given the above point, there are 2 conditions that need to be meet for the input array to have a single cycle. First, the starting element (in this case, the element at index 0) cannot be jumped through more than once, at the very beginning, so long as you haven't jumped through all of the other elements in the array. Second, the `(n+1)th` element you jump through, where `n` is the length of the array, must be the first element you visited: the element at index 0 in this case.  

__Complexity__: O(N) Time | O(1) Space  
* N = # of elements in the input array