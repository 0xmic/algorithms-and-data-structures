# Move Element To End  
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.  
The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.  

## Example  
__Sample Input__:  
```
array = [2, 1, 2,, 2, 2, 3, 4, 2]  
toMove = 2  
```
__Sample Output__:  
```
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently  
```

## Solution & Complexity  
__Strategy__: One can immediately start thinking of complexity, and assume there a solution with nlog(n) time if we were to sort the array. However, one can solve in log(n) time by using two pointers `i` and `j` that start at the beginning and end of the array. `i` will be used to swap numbers to the beginning of the array, `j` will be used to swap numbers to the end of the array.  
Start at the end of the array. In our example, `j` is already pointing at `2`, so we decrement `j` by 1 to point at `4`, which would be a good candidate to swap to the front.  
Next, look at `i`, pointing at `2`. `i` is a good candidate to swap to the back of the array. Now that both `i` and `j` want to move to the opposite ends of the array, swap `i` and `j`.  
Continue traversing the array from both ends, swapping `i` and `j` once they both have candidates to change position. Once `i >= j`, return our array.  
__Complexity__: O(N) Time | O(1) Space  