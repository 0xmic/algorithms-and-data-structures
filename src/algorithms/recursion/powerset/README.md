# Powerset  
Write a function that takes in an array of unique integers and returns its powerset.  
The powerset `P(X)` of a set `X` is the set of all subsets of `X`. For example, the powerset of `[1, 2]` is `[[], [1], [2], [1, 2]]`.  
Note that the sets in the powerset do not need to be in any particular order.  

## Example  
__Sample Input__:  
```
array = [1, 2, 3]
```

__Sample Output__:  
```
[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
```

## Solution & Complexity  
__Strategy__:  
* Think about the base cases. The powerset of an empty set is just the empty set. The powerset for a set of length 1 is just that one integer.  
* If you were to take the input set X and add an element to it, you can create a new list of subsets out of each previously added subset with the new asset.   
* This problem can be solved recursively or iteratively - each with tradeoffs to time and complexity.  

__Complexity__: O(2^n * n) Time | O(2^n * n) Space  
* There are 2^n subsets in the solution array. Each new element added to the input array doubles the number of subsets in the solution.