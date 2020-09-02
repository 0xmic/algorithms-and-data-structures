# Longest Peak  
Write a function that takes in an array of integers and returns the length of the longest peak in the array.  
A peak is defined as adjacent integers in the array that are **strictly** increasing until they reach a tip (the highest value in the peak), at which point they become **strictly** decreasing. At least three integers are required to form a peak.  
For example, the integers `1, 4, 10, 2` form a peak, but the integers `4, 0, 10` don't and neither do the integers `1, 2, 2, 0`. Similarly, the integers `1, 2, 3` don't form a peak because there aren't any strictly decreasing integers are the `3`.  

## Example  
__Sample Input__:  
```
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
```

__Sample Output__:  
```
6 // 0, 10, 6, 5, -1, -3
```

## Solution & Complexity  
__Strategy__:  
* You can solve this question by iterating through the array from left to right once.  
* Iterate through the array left to right, and treat every integer as the potential top of a peak. To be the tip of a peak, an integer has to be strictly greater than its adjacent integers.  
* As you iterate through the array from left to right, whenever you find a tip of a peak, expand outwards from the tip until you no longer have a peak. Given what peaks look like and how many peaks can therefore fit in an array, you can realize that this process results in a linear-time algorithm.  
* It is important to keep track of the longest peak you find as you iterate through the array.  

__Complexity__: O(N) Time | O(1) Space  
* N = length of the input array