# Smallest Difference  
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.  
You can assume that there will only be one pair of numbers with the smallest difference.  
## Example  
__Sample Input__:  
```
arrayOne = [-1, 5, 10, 20, 28, 3]  
arrayTwo = [26, 134, 135, 15, 17]  
```
__Sample Output__:  
```
[28, 26]  
```  
## Solution & Complexity  
__Strategy__: Begin by sorting both arrays in ascending order. Next, assume that we have chosen two arbitrary array indexes: x<sub>3</sub>, y<sub>5</sub>. Compare these two numbers to each other. If x<sub>3</sub> = y<sub>5</sub>, we can return them as our pair.  
Otherwise, if x<sub>3</sub> < y<sub>5</sub>, compute their distance, compute and update the smallest difference if this is the new smallest. Then, generate a new pair of numbers by using the fact that both arrays are sorted to choose a new pair. If x<sub>1</sub> and x<sub>2</sub> are both less than x<sub>3</sub>, then we know that the absolute difference between x<sub>1</sub> or x<sub>2</sub> and y<sub>5</sub> will be greater than the difference with x<sub>3</sub>. Thus, we should only look at numbers greater than x<sub>3</sub>. Likewise, we don't need to look at any numbers above y<sub>5</sub>. We should only increment x<sub>3</sub> or decrement y<sub>5</sub>.  
Using this logic, we can start from the beginning of both arrays and use this logic.  
__Complexity__: O(Nlog(N) + Mlog(M)) Time | O(1) Space  
* N = length of arrayOne  
* M = length of arrayTwo  