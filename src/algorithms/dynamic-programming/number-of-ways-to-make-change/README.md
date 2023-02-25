# Number Of Ways To Make Change  
Given an array of positive integers representing coin denominations and a single non-negative integer `n` representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations.  
Note that an unlimited amount of coins is at your disposal.  

## Example  
__Sample Input__:  
```
n = 6  
denoms = [1, 5]  
```

__Sample Output__:  
```
2 // 1x1 + 1x5 and 6x1  
```

## Complexity & Solution  
__Strategy__: Create an array `ways`. Each index in the array represents a specific amount of money and goes up to the target value. The index values are initialized with `ways[0] = 1` and `ways[i>0] = 0`. The value stored at each index represents the minimum number of ways to make change for the amount represented by the index number. At `ways[0]`, the value is `1`, since no change is the only way to make change for $0.  
Next, iterate through the array `d` times for each denomination, applying the following formula at each index:
`if denomination <= amount: ways[amount] += ways[amount - denomination]` .  

__Complexity__: O(Nd) Time | O(N) Space  
* N = target amount  
* d = # of denominations