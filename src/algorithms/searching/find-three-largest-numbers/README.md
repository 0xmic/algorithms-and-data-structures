# Find Three Largest Numbers  
Write a function that takes in an array of integers and, without sorting the input array, returns a sorted array of the largest integers in the input array.  
The function should return duplicate integers if necessasry; for example, it should return `[10, 10, 12]` for an input array of `[10, 5, 9, 10, 12]`.  

## Example  
**Sample Input**  
```
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
```

**Sample Output**  
```
[18, 141, 541]
```

## Solution & Complexity  
__Strategy__:  
* You can keep track of the three largest numbers in an array as you traverse the input array.  
* You can traverse the input array and update the three largest numbers if necessary by shifting them accordingly.  

__Complexity__: O(N) Time | O(1) Space  
* N = length of the input array